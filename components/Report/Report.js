import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
  } from "react-native";

  const yt = () => {
  
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <Image source={avt} style={styles.imageAvatar} />
        <Text style={styles.username}>Amelia Renata</Text>
        <TouchableOpacity style={[styles.userStats]}>
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
        <ScrollView>
          <View style={styles.userOptions}>
            <TouchableOpacity style={[styles.optionButton]}>
              <Image source={saved} style={styles.imageBeforeText} />
              <Text style={styles.optionText}>My Saved</Text>
              <Image source={next} style={styles.imageAfterText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Image source={appoint} style={styles.imageBeforeText} />
              <Text style={styles.optionText}>Appointment</Text>
              <Image source={next} style={styles.imageAfterText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Image source={payment} style={styles.imageBeforeText} />
              <Text style={styles.optionText}>Payment Method</Text>
              <Image source={next} style={styles.imageAfterText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Image source={faq} style={styles.imageBeforeText} />
              <Text style={styles.optionText}>FAQs</Text>
              <Image source={next} style={styles.imageAfterText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Image source={log} style={styles.imageBeforeText} />
              <Text style={styles.optionText}>Logout</Text>
              <Image source={next} style={styles.imageAfterText} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  
  export default yt;
  