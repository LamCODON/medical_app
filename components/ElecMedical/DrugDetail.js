import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Layout from '../common/Layout/Layout';
import { useNavigation, useRoute } from "@react-navigation/native";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import { WebView } from 'react-native-webview';
const DrugDetail = ({ route }) => {
    const viewItemUrl = route.params?.url;
    const navigation = useNavigation();
    return (
        <Layout style={styles.container}>
            <View style={drugsStyles.viewBox}>
                <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
            </View>
            <WebView
            source={{ uri: viewItemUrl }}
            style={{ flex: 1 }}
          />

        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DrugDetail;
