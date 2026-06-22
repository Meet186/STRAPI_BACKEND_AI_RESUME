import type { Schema, Struct } from '@strapi/strapi';

export interface EductionEducation extends Struct.ComponentSchema {
  collectionName: 'components_eduction_educations';
  info: {
    displayName: 'Education';
    icon: 'stack';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'book';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.String;
  };
}

export interface PersonalExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_personal_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'book';
  };
  attributes: {};
}

export interface PersonalExperiencePersonalExprience
  extends Struct.ComponentSchema {
  collectionName: 'components_personal_experience_personal_expriences';
  info: {
    displayName: 'Experience';
    icon: 'manyWays';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.RichText;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'eduction.education': EductionEducation;
      'experience.experience': ExperienceExperience;
      'personal-experience.experience': PersonalExperienceExperience;
      'personal-experience.personal-exprience': PersonalExperiencePersonalExprience;
      'skills.skills': SkillsSkills;
    }
  }
}
