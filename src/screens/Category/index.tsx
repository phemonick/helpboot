import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/buttons";
import dummyData, { CategoryProps } from "../../dummyData";
import ProjectCard from "../../components/projectCard";
import styles from "../Category/styles";

export default function Category() {
    const indexOffset = 1;
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryProps>(dummyData.categories[indexOffset]);

    function getCategoryEvents(category: CategoryProps) {
        setSelectedCategory(category);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Categories</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalScrollContainer}
                >
                    {dummyData.categories.map((category, index) => {
                        const onPress = () => getCategoryEvents(category);
                        return (
                            <Button
                                text={category.name}
                                key={category.id}
                                onPress={onPress}
                                isOutlined={selectedCategory.id === category.id}
                                containerStyle={[
                                    index !== (dummyData.categories.length - indexOffset)
                                    && styles.horizontalCardSpacing,
                                    styles.categoryButton,
                                ]}
                            />
                        );
                    })}
                </ScrollView>
                <View style={styles.scrollContainer}>
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
