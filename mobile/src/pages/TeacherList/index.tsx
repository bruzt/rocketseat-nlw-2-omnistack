import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import PageHeader from '../../components/PageHeader';

const TeacherList: React.FC = () => {

    return (
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis' />

            <Text>teste 1</Text>
        </View>
    );
}

export default TeacherList;