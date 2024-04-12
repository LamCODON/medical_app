import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable, SectionList, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Layout from "../common/Layout/Layout";
import drugsStyles from "../Drugs/drugsStyles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddPrescription = () => {
    const navigation = useNavigation();
    const [value, onChangeText] = React.useState('');
    const [currentDate, setCurrentDate] = useState('');
    const route = useRoute();
    // Logic xử lý khi nhấn nút addDrug
    const handleAddDrug = () => {
        // Xử lý khi nhấn nút addDrug
    };
    useEffect(() => {
        const currentDate = new Date().toDateString();
        setCurrentDate(currentDate);
    }, []);

    return (
        <Layout>
            <View style={styles.header}>
                {/* Nút quay về trang trước */}
                <View style={drugsStyles.viewBox}>
                    <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
                </View>
                {/* Nút "Done" */}
                <TouchableOpacity style={styles.doneButton}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>

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
                <View style={[styles.readonlyContainer, styles.borderBottom]}>
                    <Text>Ngày hiện tại: {currentDate}</Text>
                    {/* Hiển thị ngày hiện tại (readonly) */}
                </View >
                <View style={[styles.readonlyContainer, styles.borderBottom]}>
                    <TouchableOpacity style={[styles.addButton, styles.borderRadius]} onPress={handleAddDrug}>
                        <Text style={styles.addButtonText}>Add Drug</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Layout>
    );
};

const styles = {
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
        backgroundColor: '#1F9254',
        padding: 15,
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
};

export default AddPrescription;
