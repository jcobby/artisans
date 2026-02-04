import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

interface CustomModalProps {
  closeModal: () => void;
  children: React.ReactNode;
  showModal: boolean;
  modalStyles?: string;
  hasChildrenModals?: boolean;
  childModalStyles?: string;
  showChildModal?: boolean;
  closeChildModal?: () => void;
  nestedChildren?: React.ReactNode;
  modalTitle?: string;
  modalIcon?: React.ReactNode;
  customModalBg?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
}

interface ChildModalProps {
  childModalStyles?: string;
  showChildModal?: boolean;
  closeChildModal?: () => void;
  nestedChildren?: React.ReactNode;
}

const ChildModal = ({
  childModalStyles,
  showChildModal,
  closeChildModal,
  nestedChildren,
}: ChildModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showChildModal}
      onRequestClose={closeChildModal}
    >
      <View className="flex-1 justify-center items-center bg-black/70">
        <View className={`bg-white rounded-2xl p-5 w-4/5 max-h-4/5 ${childModalStyles}`}>
          <TouchableOpacity
            className="self-end bg-blue-500 rounded-full p-1.5 mb-2"
            onPress={closeChildModal}
          >
            <Ionicons name="close" size={20} color="#fff" />
          </TouchableOpacity>
          {nestedChildren}
        </View>
      </View>
    </Modal>
  );
};

export default function CustomModal({
  closeModal,
  children,
  showModal,
  modalStyles,
  hasChildrenModals,
  childModalStyles,
  showChildModal,
  closeChildModal,
  nestedChildren,
  modalTitle,
  modalIcon,
  customModalBg,
  size = 'medium',
}: CustomModalProps) {
  const getSizeClass = () => {
    const screenWidth = Dimensions.get('window').width;
    const isTablet = screenWidth > 768;
    
    switch (size) {
      case 'small':
        return isTablet ? 'w-2/5' : 'w-11/12';
      case 'medium':
        return isTablet ? 'w-3/5' : 'w-11/12';
      case 'large':
        return isTablet ? 'w-4/5' : 'w-[95%]';
      case 'full':
        return 'w-full';
      default:
        return isTablet ? 'w-3/5' : 'w-11/12';
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={closeModal}
      aria-labelledby={`parent-modal-${modalTitle ?? "info-modal"}`}
      statusBarTranslucent

    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View
          className={`rounded-2xl p-5  shadow-lg ${getSizeClass()} ${
            customModalBg ? '' : 'bg-white'
          } ${modalStyles}`}
          style={customModalBg ? { backgroundColor: customModalBg } : {}}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center flex-1">
              {modalIcon && <View className="mr-2">{modalIcon}</View>}
              {modalTitle && (
                <Text className="text-lg md:text-xl font-black text-black">
                  {modalTitle}
                </Text>
              )}
            </View>
            <TouchableOpacity
              className="bg-blue-500 rounded-full py-1.5 px-2"
              onPress={closeModal}
              accessibilityLabel="Close modal"
              accessibilityRole="button"
            >
              <Ionicons name="close" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView
            className="w-full -mt-1 py-2"
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {children}
          </ScrollView>

          {/* Child Modal */}
          {hasChildrenModals && (
            <ChildModal
              childModalStyles={childModalStyles}
              showChildModal={showChildModal}
              closeChildModal={closeChildModal}
              nestedChildren={nestedChildren}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}