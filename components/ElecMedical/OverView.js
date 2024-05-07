import { View, Text, Image, ScrollView, Pressable, SectionList, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { doc, deleteDoc, collection, onSnapshot } from "firebase/firestore"
import Layout from "../common/Layout/Layout";
import { db } from "../config/firebase";
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
import { Ionicons } from '@expo/vector-icons';


const OverView = () => {
  const [prescriptionList, setPrescriptionList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const usersQuery = collection(db, "donthuoc")
    onSnapshot(usersQuery, (snapshot) => {
      let prescriptionList = []; // Renaming usersList to prescriptionList
      snapshot.docs.forEach((doc) => {
        prescriptionList.push({ ...doc.data(), id: doc.id });
      });
      setPrescriptionList(prescriptionList)
      setLoading(false)
    })
  }, [])
  const navigation = useNavigation();
  const route = useRoute();

  const renderHealthData = () => {
    return prescriptionList;
  };

  const handleDelete = (id) => {
    const docRef = doc(db, 'donthuoc', id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const health = [
    { title: "Report", data: renderHealthData() },
  ];
  const healthData = renderHealthData();
  const renderHealth = () => {
    return (
      <Layout>
        <View style={styles.healthRow}>
          <Text style={[styles.healthTableHeader, { width: '50%' }]}>Name</Text>
          <Text style={[styles.healthTableHeader, { width: '35%' }]}>Date</Text>
          <Text style={[styles.healthTableHeader, { width: '15%' }]}>View</Text>
        </View>
        <ScrollView style={[styles.healthTableContainer, styles.tableContainer]}>
          {healthData.map((item) => (
            <View key={item.id} style={styles.healthRow}>
              <Text style={[styles.healthTableCell, { width: '50%' }]}>{item.name}</Text>
              <Text style={[styles.healthTableCell, { width: '35%' }]}>{item.date}</Text>
              <View style={[styles.healthTableCell, { width: '15%' }]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "ViewHealthRow", params: { view: item.id } })}>
                  <Text style={styles.viewHealthRow} >Xem</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "EditPrescription", params: { edit: item.id } })}>
                  <Text style={styles.viewHealthRow} >Sửa</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Text style={styles.viewHealthRow}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>

          ))}
        </ScrollView>
      </Layout>
    );
  };

  return (
    <Layout style={styles.layoutStyle}>
      <View style={drugsStyles.viewBox}>
        <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>Danh sách đơn thuốc</Text>
      </View>
      {renderHealth()}
      <TouchableOpacity style={styles.addButton}
        onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "AddPrescription", params: { someParam: "new" } })}>
        <Text style={styles.addButtonText}>Thêm đơn thuốc</Text>
        <Ionicons name="add-circle-outline" size={24} color="white" />
      </TouchableOpacity>
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
    overflow: 'hidden',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
  },
  titleContainer: {
    backgroundColor: '#1F9254',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20, // Đặt kích thước phù hợp cho chữ to hơn
  },
  tableContainer: {
    marginBottom: 20, // Tạo khoảng cách giữa title và table
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableContainer: {
    flex: 1,
    // Phần hiển thị danh sách đơn thuốc
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    height: 50,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
});

export default OverView;
