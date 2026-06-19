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

export interface PersonalExperiencePersonalExprience
  extends Struct.ComponentSchema {
  collectionName: 'components_personal_experience_personal_expriences';
  info: {
    displayName: 'personal_Exprience';
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'eduction.education': EductionEducation;
      'personal-experience.personal-exprience': PersonalExperiencePersonalExprience;
    }
  }
}
