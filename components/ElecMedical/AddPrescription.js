import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Layout from "../common/Layout/Layout";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddPrescription = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
const { selectedRows } = route.params || {};
    const [value, onChangeText] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString();
        setCurrentDate(currentDate);
    }, []);

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

                <View style={styles.readonlyContainer}>
                    <TouchableOpacity style={[styles.addButton, styles.borderRadius]} onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "DrugList" })}>
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
    }
});

export default AddPrescription;
