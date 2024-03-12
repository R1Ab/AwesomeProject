
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/routes/Router'
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>

  )
}