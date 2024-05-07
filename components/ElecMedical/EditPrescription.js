import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from "react-native";
import Layout from "../common/Layout/Layout";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { doc, getDocs, setDoc, onSnapshot, snapshotEqual, collection, addDoc, updateDoc, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
const AddPrescription = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const drugData = require('../Data/Data.json');
    let drugsList = route.params?.drugs;
    const docId = route.params?.edit;

    const [isError, setIsError] = useState(false);
    const [prescriptionList, setPrescriptionList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initialDrugsList, setDrugsList] = useState([]);
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onSnapshot(collection(db, "donthuoc"), (snapshot) => {
            const filteredPrescriptions = snapshot.docs
                .filter(doc => doc.id === docId)
                .map(doc => ({ ...doc.data(), id: doc.id }));

            setPrescriptionList(filteredPrescriptions);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    useEffect(() => {
        if (!drugsList || drugsList.length === 0) {
            // Nếu initialDrugsList rỗng, tải danh sách ID từ collection "thuoc" trong tài liệu có ID là docId
            const prescriptionRef = doc(db, 'donthuoc', docId); // Tham chiếu đến tài liệu "donthuoc"
            const drugsListRef = collection(prescriptionRef, 'thuoc'); // Tham chiếu đến collection "thuoc" trong tài liệu "donthuoc"

            // Lấy tất cả các tài liệu từ collection "thuoc" và cập nhật state drugsList với danh sách ID của chúng
            getDocs(drugsListRef)
                .then(querySnapshot => {
                    const ids = [];
                    querySnapshot.forEach(doc => {
                        ids.push(doc.id);
                    });
                    setDrugsList(ids);
                })
                .catch(error => {
                    console.error('Error getting documents: ', error);
                });
            console.log(drugsList);
        } else {
            // Nếu initialDrugsList không rỗng, sử dụng nó làm danh sách ID ban đầu
            setDrugsList(drugsList);
        }
    }, [drugsList, docId]);
    console.log(prescriptionList);

    const dates = prescriptionList.map(prescription => prescription.date || null);
    const currentDate = dates[0];
    const [value, onChangeText] = useState(route.params?.name);
    // Nếu bạn muốn bảo đảm rằng dữ liệu được tải x
    console.log(docId);
    const deleteAllDocumentsFromSubcollection = (collectionPath, documentId, subcollectionPath) => {
        // Tạo truy vấn để lấy tất cả các tài liệu trong subcollection
        const q = query(collection(db, collectionPath, documentId, subcollectionPath));

        return getDocs(q)
            .then(querySnapshot => {
                // Duyệt qua tất cả các tài liệu và xóa chúng
                querySnapshot.forEach(doc => {
                    deleteDoc(doc.ref)
                        .then(() => {
                            console.log(`Document with ID ${doc.id} deleted successfully.`);
                        })
                        .catch(error => {
                            console.error(`Error deleting document with ID ${doc.id}: `, error);
                        });
                });
                console.log('All documents from subcollection deleted successfully.');
            })
            .catch(error => {
                console.error('Error getting documents from subcollection: ', error);
            });
    };
    const handleDone = () => {
        if (!drugsList || drugsList.length === 0 || !value.trim()) {
            setIsError(true); // Hiển thị lỗi nếu drugsList rỗng hoặc value rỗng
        } else {
            setIsError(false);
            const prescriptionRef = doc(db, 'donthuoc', docId); // Tham chiếu đến tài liệu cần cập nhật trong collection "donthuoc"
            console.log(prescriptionRef);
            updateDoc(prescriptionRef, {
                date: currentDate,
                name: value.trim(),
            })

                .then(() => {
                    deleteAllDocumentsFromSubcollection('donthuoc', docId, 'thuoc')
                    .then(() => {
                    // Tạo một subcollection "thuoc" trong tài liệu đã được cập nhật
                    const drugsListRef = collection(prescriptionRef, 'thuoc');

                    drugsList.forEach(drugId => {
                        setDoc(doc(drugsListRef, drugId.toString()), {
                            ...drugData.find(drug => drug.id === drugId)

                        });
                    });
                });

            navigation.popToTop(); // Chuyển về trang trước nếu thành công
        })
                .catch (error => {
    console.error('Error updating document: ', error); // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
});
        }
    };
const renderItem = ({ item }) => (
    <View key={item.id} style={styles.healthRow}>
        <Image
            source={require('../../assets/drug_images/thuocA.jpg')}
            style={{
                width: 50, // Đặt chiều rộng của hình ảnh
                height: 50, // Đặt chiều cao của hình ảnh
                resizeMode: 'contain', // Chọn phương thức điều chỉnh kích thước của hình ảnh
            }}
        />
        <Text style={[styles.healthTableCell, { width: '35%' }]}>{item.title}</Text>
        <TouchableOpacity style={[styles.healthTableCell, { width: '15%' }]}
            onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "DrugDetail", params: { url: item.link } })}
        >
            <Text style={styles.viewHealthRow} >Xem</Text>
        </TouchableOpacity>
    </View>
);
const handleAddDrug = () => {
    // Xử lý khi nhấn nút addDrug
};

return (
    <Layout>
        <View style={styles.header}>
            {/* Nút quay về trang trước */}
            <View>
                <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
            </View>
            {/* Nút "Done" */}
            <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
                <Text style={styles.doneButtonText}>Cập nhật</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>
            <View style={styles.readonlyContainer}>
                <Text>Ngày hiện tại: {currentDate}</Text>
                {/* Hiển thị ngày hiện tại (readonly) */}
            </View>
            <View style={[styles.inputContainer, styles.borderBottom]}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Thêm tình trạng"
                    style={{ padding: 10 }}
                />
                {/* Thêm input text tình trạng */}
            </View>
            {isError && (
                <Text style={{ color: 'red' }}>Vui lòng điền thông tin tình trạng.</Text>
            )}
            <View style={styles.flatlistContainer}>
                {drugsList && drugsList.length > 0 && (
                    <FlatList
                        data={drugsList.map(id => drugData.find(drug => drug.id === id))}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                )}
            </View>

            <View style={styles.readonlyContainer}>
                <TouchableOpacity style={[styles.addButton, styles.borderRadius]} onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "EditDrugList", params: { drugData: drugsList, edit: docId } })}>
                    <Text style={styles.addButtonText}>Add Drug</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Layout>
);
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    readonlyContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: 'gray',
        padding: 12,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    borderBottom: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    borderRadius: {
        borderRadius: 10,
    },
    doneButton: {
        backgroundColor: 'green',
        padding: 12,
        alignItems: 'center',
    },
    doneButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    drugName: {
        flex: 1,
    },
    drugId: {
        width: 30,
    },
    drugImage: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    drugView: {
        width: 50,
        marginRight: 10,
    },
    healthTableContainer: {
        flex: 1, // Cho phép ScrollView chiếm toàn bộ chiều cao
        height: '50%', // Chiều cao cố định 50% màn hình
    },
    healthRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1, // Add a border for each row
        borderBottomColor: "#ddd", // Set the border color
        padding: 10, // Add padding for better readability
    },
    healthTableHeader: {
        fontWeight: "bold",
        fontSize: 16,
    },
    healthTableCell: {
        fontSize: 14,
    },
});

export default AddPrescription;
