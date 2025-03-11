import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";


const tripsData = [
  {
    id: "1",
    title: "Beach Getaway",
    location: "Malibu, CA",
    date: "2025-04-10",
    image:
      "https://static.toiimg.com/thumb/msid-93316368,width-748,height-499,resizemode=4,imgsize-236120/.jpg",
    description:
      "Enjoy a relaxing time at the beautiful Malibu beach with great food and activities.",
    gallery: [],
  },
  {
    id: "2",
    title: "Mountain Adventure",
    location: "Kiyoto, JP",
    date: "2025-05-15",
    image:
      "https://cdn.britannica.com/96/196396-050-13758154/Chureito-Pagoda-Arakura-Sengen-Shrine-Mount-Fuji.jpg",
    description:
      "Experience the breathtaking mountain scenery and thrilling hiking trails in Aspen.",
    gallery: [],
  },
  {
    id: "3",
    title: "City Exploration",
    location: "New York, NY",
    date: "2025-06-20",
    image:
      "https://career-advice.jobs.ac.uk/wp-content/uploads/Norway3-1170x630.jpg.optimal.jpg",
    description:
      "Discover the iconic landmarks, museums, and vibrant culture of New York City.",
    gallery: [],
  },
  {
    id: "4",
    title: "Desert Safari",
    location: "Dubai, UAE",
    date: "2025-07-05",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/06/8a/3c/arabian-nights-village.jpg?w=900&h=500&s=1",
    description:
      "Take an adventurous ride through the golden sands of Dubai with camel rides and dune bashing.",
    gallery: ["https://career-advice.jobs.ac.uk/wp-content/uploads/Norway3-1170x630.jpg.optimal.jpg"],
  },
];

const TripDetails = () => {
  const { id } = useLocalSearchParams();
  const trip = tripsData.find((t) => t.id === id);

  if (!trip) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-lg">Trip not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Main Trip Image */}
      <View className="border-2 border-black rounded-lg mb-6 overflow-hidden">
        <Image source={{ uri: trip.image }} className="w-full h-60" resizeMode="cover" />
      </View>

      {/* Title */}
      <Text className="text-black font-bold text-4xl mb-3">{trip.title}</Text>

      {/* Location & Date */}
      <View className="mb-6">
        <Text className="text-black text-lg font-medium">📍 {trip.location}</Text>
        <Text className="text-black text-base">
          📅{" "}
          {new Date(trip.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </View>

      {/* Divider */}
      <View className="h-px bg-black/20 mb-6" />

      {/* Description */}
      <Text className="text-black text-lg leading-7 mb-8">{trip.description}</Text>

      {/* Gallery Section */}
      <Text className="text-black font-semibold text-xl mb-3">Trip Gallery 📸</Text>
      {trip.gallery.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
          {trip.gallery.map((image, index) => (
            <View key={index} className="mr-3">
              <Image source={{ uri: image }} className="w-40 h-40 rounded-lg" />
            </View>
          ))}
        </ScrollView>
      ) : (
        <View className="justify-center items-center p-4 border border-black rounded-lg bg-gray-100">
          <Text className="text-black text-center text-lg">
            No images yet! 🌍{"\n"}Explore {trip.location} and capture your moments!
          </Text>
        </View>
      )}

      {/* Extra space */}
      <View className="h-20" />
    </ScrollView>
  );
};

export default TripDetails;
