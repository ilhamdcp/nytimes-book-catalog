import { TitleType } from "@/constants/TitleType";


interface TitleArgs {
    titleType: TitleType,
    title: string
}

export default function Title(args: TitleArgs) {
    if (TitleType.H1 === args.titleType) {
        return (<h1>{args.title}</h1>);
    }
    if (TitleType.H2 === args.titleType) {
        return (<h2>{args.title}</h2>);
    }
    if (TitleType.H3 === args.titleType) {
        return (<h3>{args.title}</h3>);
    }    
    throw Error("Title not yet implemented");
}