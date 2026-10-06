export interface CharacterPose {
  id: string;
  name: string;
  code: string;
  filename: string;
  imageSrc: string;
  aspectRatio: string;
  caption: string;
  description: string;
  vibe: string;
  tags: string[];
}

export interface CharacterExpression {
  id: string;
  name: string;
  code: string;
  quote: string;
  description: string;
  browAngle: string;
  eyeLuminance: string;
  mouthExpression: string;
  humorContext: string;
}

export interface TurnaroundView {
  id: string;
  label: string;
  angle: string;
  features: string[];
  notes: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  pantoneRef: string;
  usage: string;
}
