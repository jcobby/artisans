import React from "react";
import { Dimensions, Text, View } from "react-native";
import Header, {
  ArtisanCard,
  ArtisanListRow,
  InfoRow,
} from "../../components/ui";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
// import sportsCar from "../../../assets/images/sportsCar.jpg"

const artisans = [
  {
    id: "1",
    name: "Asamoah Gyan",
    role: "Electrician",
    rating: 4,
  },
  {
    id: "2",
    name: "Kwame Mensah",
    role: "Plumber",
    rating: 5,
  },
  {
    id: "3",
    name: "Kofi Boateng",
    role: "Carpenter",
    rating: 3,
  },
  {
    id: "4",
    name: "Yaw Owusu",
    role: "Painter",
    rating: 4,
  },
  {
    id: "5",
    name: "Kojo Appiah",
    role: "AC Technician",
    rating: 5,
  },
];

export default function SearchResultsScreen() {
  const navigation = useNavigation();

  const { width } = Dimensions.get("window");

  const ITEM_WIDTH = width / 2.25;

  // const SCREEN_PADDING = 16;

  // const GAP2 = 16;
  // const CAROUSEL2_WIDTH = width - SCREEN_PADDING * 2;
  // const ITEM2_WIDTH = (CAROUSEL2_WIDTH - GAP2) / 2;

  return (
    <View className="flex-1 ">
      <Header showBack={true} />
      <View className="px-5 gap-2">
        <Text className=" font-semibold text-2xl">Electrician</Text>
        <Text className="text-gray-500">Search Results</Text>
      </View>

      <View className="w-full pl-5 pt-5 gap-2">
        <Text className="text-lg">Electricians near you</Text>

        <Carousel
          loop={false}
          snapEnabled
          width={ITEM_WIDTH}
          overscrollEnabled={false}
          height={200}
          data={artisans}
          style={{ paddingLeft: 0, width: "100%" }}
          renderItem={({ item }) => (
            <ArtisanCard
              id={item.id}
              image={require("../../../assets/images/sportsCar.jpg")}
              name={item.name}
              role={item.role}
              rating={item.rating}
              onPress={() =>
                navigation.navigate("CompleteProfile" as never, {
                  fromCustomer: true,
                })
              }
            />
          )}
        />
      </View>
      <View className="pt-5 px-5">
        <Text>Other Results</Text>
        <View className="px-2">
          {artisans.map((item) => (
            <ArtisanListRow
              name={item.name}
              role={item.role}
              rating={item.rating}
              imageUri={require("../../../assets/images/sportsCar.jpg")}
              onPress={() =>
                navigation.navigate("CompleteProfile" as never, {
                  fromCustomer: true,
                })
              }
              distance="3"
            />
          ))}
        </View>
      </View>
    </View>
  );
}
