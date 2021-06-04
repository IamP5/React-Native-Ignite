import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface skillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : skillCardProps){
    return (
        <TouchableOpacity 
            style = {styles.buttonSkill}
            {...rest}
        >
            <Text style = {styles.textSkill} >
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },

    textSkill: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    }
})