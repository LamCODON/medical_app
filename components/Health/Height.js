import { View, Text, Image, ScrollView, Pressable, SectionList, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React, { PureComponent } from "react";
import Layout from "../common/Layout/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import drugsStyles from "../Drugs/drugsStyles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import AdsMedicineImg from "../../assets/ads_medicine.png";
import ProductImg from "../../assets/product.png";
import avt from "../../assets/icons/avt.png";
import noti from "../../assets/noti.png";
import inbox from "../../assets/inbox.png";
import setting from "../../assets/setting.png";
import BarChart from "../Profile/Barchat";

const GRAPH_MARGIN = 20;
const colors = {
    axis: 'black',
};

const Height = () => {
    const SVGHeight = 300;
    const SVGWidth = 300;
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
    const navigation = useNavigation();
    const route = useRoute();
    
    const renderHealth = () => {
        return (

            <ScrollView style={styles.healthTableContainer}>
                <View style={styles.healthRow}>
                    <Text style={[styles.healthTableHeader, { width: '30%' }]}>Name</Text>
                    <Text style={[styles.healthTableHeader, { width: '25%' }]}>Date</Text>
                    <Text style={[styles.healthTableHeader, { width: '27%' }]}>Amount</Text>
                    <Text style={[styles.healthTableHeader, { width: '18%' }]}>Status</Text>
                </View>
                {healthData.map((item) => (
                    <View key={item.id} style={styles.healthRow}>
                        <Text style={[styles.healthTableCell, { width: '30%' }]}>{item.name}</Text>
                        <Text style={[styles.healthTableCell, { width: '25%' }]}>{item.date}</Text>
                        <Text style={[styles.healthTableCell, { width: '25%' }]}>{item.amount}</Text>
                        <Text style={[styles.healthTableCell, { width: '20%' }, item.status === 'Forgot' ? styles.forgotStatus : styles.defaultStatus]}>{item.status}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    };

    return (
        <Layout>
            <View style={drugsStyles.viewBox}>
                <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
            </View>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={avt} style={styles.imageAvatar} />
                    <View >
                        <Text style={{ color: 'green' }}>Hi, WelcomeBack</Text>
                        <Text style={{ fontWeight: 'bold' }}>John Doe</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Image source={noti} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={inbox} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={setting} style={styles.icon} />
                    </TouchableOpacity>

                </View>
            </View>


            <TouchableOpacity style={[styles.userStats]}
                onPress={() => navigation.navigate("HealthNavigator", { screen: "OverView" })}
            >
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Heart rate</Text>
                    <Text style={styles.statValue}>215bpm</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Calories</Text>
                    <Text style={styles.statValue}>756cal</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statLabel}>Weight</Text>
                    <Text style={styles.statValue}>103lbs</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button]}
                    onPress={() => navigation.navigate("HealthNavigator", { screen: "OverView" })}>
                    <Text style={[styles.buttonText]}>Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} 
                    onPress={() => navigation.navigate("HealthNavigator", { screen: "Weight" })}>
                    <Text style={[styles.buttonText]}>Weight</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} 
                    onPress={() => { /* Xử lý khi nhấn nút */ }}>
                    <Text style={[styles.buttonText, styles.activeButton]}>Height</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
};


const styles = StyleSheet.create({

    userStats: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        height: "15%",
    },
    stat: {
        flex: 1,
        alignItems: "center",
    },
    statLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 25,
        color: 'black'
    },
    statValue: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        color: 'black'
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
    defaultStatus: {
        backgroundColor: '#EBF9F1',
        width: 70,
        borderRadius: 20, // bo góc thành hình tròn
        overflow: 'hidden', // Ẩn nội dung vượt qua phần được padding
        paddingVertical: 10,
        textAlign: 'center',
        color: 'green'
    },
    forgotStatus: {
        backgroundColor: '#FEF2E5',
        width: 70,
        borderRadius: 20, // bo góc thành hình tròn
        overflow: 'hidden', // Ẩn nội dung vượt qua phần được padding
        paddingVertical: 10,
        textAlign: 'center',
        color: 'orange'
    },
    imageAvatar: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerRight: {
        flexDirection: "row"
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 3
    },
    buttonContainer: {
        height: '15%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonText: {
        width: 90,
        paddingVertical: 10,
        textAlign: "center",
        backgroundColor: '#ECECEC',
        borderRadius: 20,
        overflow: 'hidden',
        color: '#1F9254'
    },
    activeButton: {
        backgroundColor: '#8BF8D1'
    }
});

export default Height;
