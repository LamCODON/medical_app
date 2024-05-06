import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from "react-native";
import Layout from "../common/Layout/Layout";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddPrescription = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const drugData = require('../Data/Data.json');
    const drugsList = route.params?.drugs;
    const [value, onChangeText] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString();
        setCurrentDate(currentDate);
    }, []);
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
                <TouchableOpacity style={styles.doneButton} onPress={() => navigation.popToTop()}>
                    <Text style={styles.doneButtonText}>Done</Text>
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
                    <TouchableOpacity style={[styles.addButton, styles.borderRadius]} onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "DrugList", params: { drugData: drugsList } })}>
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
