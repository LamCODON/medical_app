import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Layout from "../common/Layout/Layout";

const DrugList = ({ navigation }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Dữ liệu danh sách các loại thuốc
    const drugData = [
        { id: 1, name: 'Thuốc A', image: require('../../assets/drug_images/thuocA.jpg') },
        { id: 2, name: 'Thuốc B', image: require('../../assets/drug_images/thuocB.jpg') },
        // Thêm các dữ liệu khác tương tự
    ];

    // Xử lý khi người dùng nhấp vào hàng
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

        setSelectedRows(updatedSelectedRows);
    };

    // Kiểm tra xem một hàng có được chọn hay không
    const isRowSelected = (id) => {
        return selectedRows.includes(id);
    };

    // Filter danh sách thuốc dựa trên giá trị của ô tìm kiếm
    const filteredDrugData = drugData.filter(drug => drug.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                {/* Hiển thị danh sách các loại thuốc đã lọc */}
                {filteredDrugData.map((drug) => (
                    <TouchableOpacity
                        key={drug.id}
                        style={[styles.drugRow, isRowSelected(drug.id) && styles.selectedRow]}
                        onPress={() => handleRowPress(drug.id)}
                    >
                        <Text style={styles.drugId}>{drug.id}</Text>
                        <Image source={drug.image} style={styles.drugImage} />
                        <Text style={styles.drugName}>{drug.name}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={() => navigation.goBack({ someParam: "drug" , drugs: selectedRows })} style={styles.backButton}>
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
        width: 50,
        height: 50,
        marginRight: 10,
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
