import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  Button,
  Modal,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CustomModalProps {
  closeModal: () => void;
  children: React.ReactNode;
  showModal?: boolean;
  modalStyles?: string;
  hasChildrenModals?: boolean;
  childModalStyles?: string;
  showChildModal?: boolean;
  closeChildModal?: () => void;
  nestedChildren?: React.ReactNode;
  modalTitle?: string;
  modalIcon?: React.ReactNode;
  customModalBg?: string;
  visible?: boolean;
  setVisible?: any;
  size?: "small" | "medium" | "large" | "full";
}

interface ChildModalProps {
  childModalStyles?: string;
  showChildModal?: boolean;
  closeChildModal?: () => void;
  nestedChildren?: React.ReactNode;
}

// const ChildModal = ({
//   childModalStyles,
//   showChildModal,
//   closeChildModal,
//   nestedChildren,
// }: ChildModalProps) => {
//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={showChildModal}
//       onRequestClose={closeChildModal}
//     >
//       <View className="flex-1 justify-center items-center bg-black/70">
//         <View
//           className={`bg-white rounded-2xl p-5 w-4/5 max-h-4/5 ${childModalStyles}`}
//         >
//           <TouchableOpacity
//             className="self-end bg-blue-500 rounded-full p-1.5 mb-2"
//             onPress={closeChildModal}
//           >
//             <Ionicons name="close" size={20} color="#fff" />
//           </TouchableOpacity>
//           {nestedChildren}
//         </View>
//       </View>
//     </Modal>
//   );
// };

export default function CustomModal({
  visible,
  setVisible,
  children,
  modalTitle,
  size = "medium",
}: CustomModalProps) {
  const screenWidth = Dimensions.get("window").width;
  const isTablet = screenWidth > 768;

  const isFull = size === "full";

  const getWidth = () => {
    switch (size) {
      case "small":
        return isTablet ? "40%" : "90%";
      case "medium":
        return isTablet ? "60%" : "90%";
      case "large":
        return isTablet ? "80%" : "95%";
      case "full":
        return "100%";
      default:
        return "90%";
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <View style={[styles.overlay, isFull && styles.overlayFull]}>
        <View style={[styles.modalBox, { width: getWidth() }]}>
          {/* Header */}
          {modalTitle && (
            <View style={styles.header}>
              <Text style={styles.title}>{modalTitle}</Text>

              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.close}>✕</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Body */}
          <View style={styles.body}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center", // default for non-full modals
        alignItems: "center",

  },

  overlayFull: {
    justifyContent: "flex-start", // full modal starts from top
  },

  modalBox: {
    height: "75%", // 👈 KEY FIX
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  close: {
    fontSize: 22,
  },
  body: {
    flex: 1,
  },
});
