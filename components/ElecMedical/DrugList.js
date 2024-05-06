import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Layout from "../common/Layout/Layout";
import { collection, onSnapshot, snapshotEqual } from 'firebase/firestore';
import { db } from '../config/firebase';
import thuocAImage from 'C:/Users/This MC/Desktop/mobie new/medical_app/assets/drug_images/thuocA.jpg';
import { useNavigation, useRoute } from "@react-navigation/native";
const DrugList = ({ navigation }) => {

    const [selectedRows, setSelectedRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const route = useRoute();
    // Dữ liệu danh sách các loại thuốc
    const drugData = require('../Data/Data.json');
    const drugsList = route.params?.drugData;
    console.log(drugsList);
    // Xử lý khi người dùng nhấp vào hàng
    useEffect(() => {
        if (drugsList && drugsList.length > 0) {
            setSelectedRows(drugsList); // Chọn các ID trong drugsList nếu có giá trị ban đầu
        }
    }, [drugsList]); // Sử dụng useEffect để theo dõi sự thay đổi của drugsList

    const handleRowPress = (id) => {
        const selectedIndex = selectedRows.indexOf(id);
        let updatedSelectedRows = [...selectedRows];
        if (selectedIndex === -1) {
            // Nếu hàng chưa được chọn, thêm vào danh sách và thêm class "select"
            updatedSelectedRows.push(id);
        } else {
            // Nếu hàng đã được chọn, loại bỏ khỏi danh sách và loại bỏ class "select"
            updatedSelectedRows.splice(selectedIndex, 1);
        }
        console.log(updatedSelectedRows);
        setSelectedRows(updatedSelectedRows);
    };

    // Kiểm tra xem một hàng có được chọn hay không
    const isRowSelected = (id) => {
        return selectedRows.includes(id);
    };

    // Filter danh sách thuốc dựa trên giá trị của ô tìm kiếm
    const filteredDrugData = drugData.filter(drug => drug.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>Danh sách các loại thuốc</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Nhập tên thuốc..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <ScrollView>
                    {/* Hiển thị danh sách các loại thuốc đã lọc */}
                    {filteredDrugData.map((drug) => (
                        <TouchableOpacity
                            key={drug.id}
                            style={[styles.drugRow, isRowSelected(drug.id) && styles.selectedRow]}
                            onPress={() => handleRowPress(drug.id)}
                        >
                            <Text style={styles.drugId}>{drug.id}</Text>
                            {/* <Image source={thuocAImage} style={styles.drugImage} /> */}
                            <Text style={styles.drugName}>{drug.title}</Text>
                            <TouchableOpacity style={styles.drugView}
                                onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "DrugDetail", params: { url: drug.href } })}
                            ><Text>View</Text></TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.navigate("AddPrescription", { someParam: "drug", drugs: selectedRows })} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    drugRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    selectedRow: {
        backgroundColor: 'lightblue', // Màu nền khi hàng được chọn
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
    backButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
    },
    backButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default DrugList;
