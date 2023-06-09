import { PronounsBadge } from "./PronounsBadge";
import {Language} from "./Language";
export function getPronounsBadge(pronouns:string[], color:string = "orange"):HTMLImageElement{
    var pBadge = new PronounsBadge();
    return pBadge.getPronounsBadge(pronouns, color);
}
export async function getPronounsBadgeWithSnackbarMsg(pronouns:string[], language:Language = Language.en, color:string = "orange",height:number = 20):Promise<HTMLImageElement>{
    var pBadge = new PronounsBadge();
    return pBadge.getPronounsBadgeWithExamplesOnClick(pronouns, color,height,language);
}
