import { View, Text, Image, ScrollView, Pressable, SectionList, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { gray } from "d3";
import { doc, getDoc, onSnapshot, snapshotEqual, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import DrugDetail from "../ElecMedical/DrugDetail";
const ViewHealthRow = () => {
  const [drugList, setDrugList] = useState([]);
  const [prescriptionInfor, setPrescriptionInfor] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const viewItemId = route.params?.view;
  useEffect(() => {
    setLoading(true)
    const donthuocRef = doc(db, "donthuoc", viewItemId);
    const unsubscribe = onSnapshot(collection(donthuocRef, "thuoc"), (snapshot) => {

      const thuocData = snapshot.docs.map((doc) => {
        drugList.push({ ...doc.data(), id: doc.id });
      });
      setDrugList(drugList)
      setLoading(false)
    })
  }, [])

  const navigation = useNavigation();


  const renderHealthData = () => {
    return drugList;
  };

  const health = [
    { title: "Report", data: renderHealthData() },
  ];
  const healthData = renderHealthData();
  const renderHealth = () => {
    return (

      <ScrollView style={styles.healthTableContainer}>
        <View style={styles.healthRow}>
          <Text style={[styles.healthTableHeader, { width: '50%' }]}>Image</Text>
          <Text style={[styles.healthTableHeader, { width: '35%' }]}>Name</Text>
          <Text style={[styles.healthTableHeader, { width: '15%' }]}>View</Text>
        </View>
        {healthData.map((item) => (
          <View key={item.id} style={styles.healthRow}>
            <Image
              source={require('../../assets/drug_images/thuocA.jpg')}
              style={{
                width: 50, // Đặt chiều rộng của hình ảnh
                height: 50, // Đặt chiều cao của hình ảnh
                resizeMode: 'contain', // Chọn phương thức điều chỉnh kích thước của hình ảnh
              }}
            />
            <Text style={[styles.healthTableCell, { width: '35%' }]}>{item.name}</Text>
            <TouchableOpacity style={[styles.healthTableCell, { width: '15%' }]}
              onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "DrugDetail", params: { url: item.link } })}
            >
              <Text style={styles.viewHealthRow} >Xem</Text>
            </TouchableOpacity>
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
      <Text >Tinh trang: {viewItemId}</Text>
      <Text >Date: {viewItemId}</Text>
      {renderHealth()}
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
    justifyContent: 'space-around',

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
  },
  viewHealthRow: {
    color: '#1F9254',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 20,
    overflow: 'hidden',
  }
});

export default ViewHealthRow;
