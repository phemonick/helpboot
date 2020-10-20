import * as React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import Button from "../buttons";
import Card from "../card";
import potholes from "../../assets/images/potholes.png";
import styles from "./styles";

interface ProjectCardProps {
    title: string;
    image: string;
    startDate: string;
    summary: string;
    location: string;
    containerStyle?: StyleProp<ViewStyle>;
}

export default function ProjectCard(props: ProjectCardProps) {
    const onClick = () => {};

    return (
        <Card
            source={potholes}
            containerStyle={props.containerStyle}
        >
            <>
                <Text style={styles.location}>{props.location}</Text>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.summary}>{props.summary}</Text>
                <Text style={styles.date}>{props.startDate}</Text>
                <Button text="Join" onPress={onClick} containerStyle={styles.cardButton} />
            </>
        </Card>
    );
}
