import * as React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete/GooglePlacesAutocomplete";
import { NavigationInjectedProps } from "react-navigation";
import { Routes } from "../../navigation/routes";
import { ScrollView, View } from "react-native";
import { Step, stepDetails, StepProps } from "./stepEngine";
import Button from "../../components/buttons";
import DatePicker from "../../components/datePicker";
import dummyData, { CategoryProps } from "../../dummyData";
import Input from "../../components/input";
import moment from "moment";
import ProjectCreationHeader from "../../components/projectCreationHeader";
import RadioSelect from "../../components/radioSelect";
import styles from "./styles";

const stepKeys: string[] = Object.keys(Step);
const stepValues: string[] = Object.values(Step);
const firstStepIndex = 0;
const lessOne = 1;
const oneDay = 1;
const lastStepIndex = stepKeys.length - lessOne;
export default function ProjectCreation(props: NavigationInjectedProps) {
    const [currentStep, setCurrentStep] = React.useState<StepProps>(stepDetails[Step.SelectCategory]);
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryProps | null>(null);
    const [title, setTitle] = React.useState<string>("");
    const [summary, setSummary] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");
    const [startDate, setStartDate] = React.useState<Date>(moment().add(oneDay, "day").toDate());
    const [endDate, setEndDate] = React.useState<Date>(moment().add(oneDay, "day").toDate());

    function gotoHome() {
        props.navigation.navigate(Routes.Home);
    }

    function getCategoryField() {
        return (
            <ScrollView contentContainerStyle={styles.radioContainer}>
                {dummyData.categories.map(category => {
                    const onSelect = () => setSelectedCategory(category);
                    return (
                        <RadioSelect
                            key={category.id}
                            isActive={!!selectedCategory && (selectedCategory.id === category.id)}
                            text={category.name}
                            onSelect={onSelect}
                            containerStyle={styles.radioButton}
                        />
                    );
                })}
            </ScrollView>
        );
    }

    function getDetails() {
        return (
            <ScrollView contentContainerStyle={styles.radioContainer}>
                <Input
                    onChange={setTitle}
                    value={title}
                    placeHolder="Title"
                    containerStyle={styles.borderedInput}
                />
                <Input
                    onChange={setSummary}
                    value={summary}
                    placeHolder="Summary"
                    containerStyle={styles.borderedInput}
                />
                <Input
                    onChange={setDescription}
                    value={description}
                    placeHolder="Description"
                    containerStyle={styles.borderedInput}
                    numberOfLines={10}
                    isTextArea
                />
                <DatePicker
                    placeHolder="Start Date"
                    value={startDate}
                    onChange={setStartDate}
                />
                <DatePicker
                    placeHolder="End Date"
                    value={endDate}
                    onChange={setEndDate}
                />
            </ScrollView>
        );
    }

    function getLocation() {
        return (
            <GooglePlacesAutocomplete
                placeholder="Start typing for suggestions"
                query={{
                    key:      "API",
                    language: "en",
                }}
                // textInputProps={}
                onPress={() => console.log('presse')}
                minLength={3}
                fetchDetails
            />
        );
    }

    function getField(step: Step) {
        const forms = {
            [Step.SelectCategory]: getCategoryField,
            [Step.Details]:        getDetails,
            [Step.Location]:       getLocation,
            [Step.Image]:          getCategoryField,
            [Step.Needs]:          getCategoryField,
        };

        return forms[step]();
    }

    function gotoNextForm() {
        if (currentStep.rank < stepKeys.length) {
            // No need of adding one as stepKeys is an array with index starting at zero
            const newStep = currentStep.rank;

            if (newStep) {
                const step = stepKeys[newStep];
                setCurrentStep(stepDetails[step as Step]);
            }
        }
    }

    function gotoBackForm() {
        if (currentStep.rank) {
            const stepBack = 2;
            const newStep = currentStep.rank - stepBack;

            if (newStep >= firstStepIndex) {
                const step = stepKeys[newStep];
                setCurrentStep(stepDetails[step as Step]);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <ProjectCreationHeader
                    stepTitle={currentStep.title}
                    currentStep={currentStep.rank}
                    totalStep={stepKeys.length}
                    onCloseClick={gotoHome}
                />
                {getField(currentStep.name as Step)}
                <View style={styles.buttonWrapper}>
                    {(stepValues[firstStepIndex] !== currentStep.name)
                        ? <Button text="Back" onPress={gotoBackForm} containerStyle={styles.button}/>
                        : null
                    }
                    <Button
                        text={(stepValues[lastStepIndex] !== currentStep.name) ? "Next" : "Submit"}
                        onPress={gotoNextForm}
                        containerStyle={styles.button}
                    />
                </View>
            </View>
        </View>
    );
}
