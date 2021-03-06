/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Icon,
  Layout,
} from 'react-native-ui-kitten';

const StarIcon = (style) => (
  <Icon {...style} name='star'/>
);

export const ButtonWithIconShowcase = () => (
  <Layout style={styles.container}>
    <Button style={styles.button} status='primary' icon={StarIcon}>PRIMARY</Button>
    <Button style={styles.button} status='success' icon={StarIcon}>SUCCESS</Button>
    <Button style={styles.button} status='danger' icon={StarIcon}/>
    <Button style={styles.button} appearance='ghost' status='danger' icon={StarIcon}/>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  button: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
});
