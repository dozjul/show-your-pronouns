declare enum Language {
    ENGLISH = 'english',
    SPANISH = 'spanish',
    FRENCH = 'french'
}
declare enum PronounsProvider{
    pronounsPage = 'pronouns.page',
    pronounsAlejo = 'pronouns.alejo.io'
}
declare class PronounsUser {
    protected username: string;
    protected data: Record<string, unknown>;
    protected language: Language;
    protected provider: PronounsProvider;
    protected errorWhileFetching: boolean;
    protected static testDocument: Document;
    protected static testFetch: () => void;
    public static setupForTests: (document:Document, fetch:Function) => void;
    protected getData: () => Promise<JSON>;
    protected getDataNoFetch: () => JSON;
    public fetchPronouns: () => Promise<void>;
    public getAvatar: () => Promise<URL>;
    public setLanguage: (language:Language) => void;
    public getAge: () => Promise<Number>;
    public getPronounsList: (minimumOpinion:number) => Promise<string[]>;
    public getPrideFlags: () => Array<string>;
    public getOpinionOnPronouns: (pronoun:String) => Number;
    public getOpinionOnName: (name:string) => number;
    public getNamesList: (minimumOpinion:number) => Array<string>;
    public getHTMLFormattedPronouns: (withLinks:boolean) => Promise<HTMLSpanElement>;
}
