import {PronounsUser} from "@rye/pronouns-user-framework";
import {Language} from "@rye/pronouns-base";
import { PronounsProvider } from '@rye/pronouns-user-providers';
import {getPronounsUser} from "@rye/pronouns-user-providers";
export var users:Map<string, PronounsUser> = new Map();
export async function newUser(name:string, language:Language = Language.en, provider:PronounsProvider = PronounsProvider.pronounsPage):Promise<PronounsUser>{
    console.debug(name, language, provider);
    if(users.has(name)){
        users.get(name).setLanguage(language);
        return users.get(name);
    } else {
        // @ts-ignore
        users.set(name, getPronounsUser(provider, name, language));
        await users.get(name).fetchPronouns();
        return users.get(name);
    }
}
