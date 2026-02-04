import React from 'react'
import { Text, View } from 'react-native'
import CustomModal from '../../modals'

export default function CustomerHome() {
  return (
    <View>
      hello worlddd
      <CustomModal closeModal={() => {}} showModal={true} size='full' modalStyles={`h-full`}
        modalTitle='Work Location'>
        <View>
          <Text>Modal Content</Text>
        </View>
      </CustomModal>
    </View>
  )
}
