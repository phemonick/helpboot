export enum Step {
    "SelectCategory" = "SelectCategory",
    "Details" = "Details",
    "Location" = "Location",
    "Image" = "Image",
    "Needs" = "Needs",
}

export interface StepProps {
    name: string;
    rank: number;
    title: string;
}

export const stepDetails = {
    [Step.SelectCategory]: {
        name:  Step.SelectCategory,
        rank:  1,
        title: "Select a Category",
    },
    [Step.Details]: {
        name:  Step.Details,
        rank:  2,
        title: "Describe your project",
    },
    [Step.Location]: {
        name:  Step.Location,
        rank:  3,
        title: "Where is the location",
    },
    [Step.Image]: {
        name:  Step.Image,
        rank:  4,
        title: "Upload a Project Image",
    },
    [Step.Needs]: {
        name:  Step.Needs,
        rank:  5,
        title: "Project Needs",
    },
};
