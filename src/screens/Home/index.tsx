import * as React from "react";
import {
    ImageBackground, ScrollView, Text, View,
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Routes } from "../../navigation/routes";
import Button from "../../components/buttons";
import dummyData from "../../dummyData";
import helpinghands from "../../assets/images/helpinghands.png";
import ProjectCard from "../../components/projectCard";
import styles from "./styles";

export default function Home(props: NavigationInjectedProps) {
    const indexOffset = 1;

    function gotoUpcoming() {

    }

    function gotoCategory() {
        props.navigation.navigate(Routes.Explore);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.upcomingContainer}>
                    <Text style={styles.header}>Upcoming events</Text>
                    <Button text="See All" onPress={gotoUpcoming} containerStyle={styles.seeAllButton}/>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalScrollContainer}
                >
                    {dummyData.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            startDate={project.startDate}
                            location={project.location}
                            image={project.banner}
                            summary={project.summary}
                            containerStyle={[
                                index !== (dummyData.projects.length - indexOffset) && styles.horizontalCardSpacing,
                                styles.horizontalProjectContainer,
                            ]}
                        />
                    ))}
                </ScrollView>
                <View style={styles.categoryContainer}>
                    <Text style={[styles.header, styles.cardSpacing]}>Explore Categories</Text>
                    <ImageBackground
                        source={helpinghands}
                        style={styles.imageBackground}
                        imageStyle={styles.imageStyle}
                    >
                        <Button text="View Categories" onPress={gotoCategory} containerStyle={styles.categoryButton}/>
                    </ImageBackground>
                </View>
                <View style={styles.scrollContainer}>
                    <Text style={[styles.header, styles.cardSpacing]}>Suggested Events</Text>
                    {dummyData.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            startDate={project.startDate}
                            location={project.location}
                            image={project.banner}
                            summary={project.summary}
                            containerStyle={styles.cardSpacing}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
