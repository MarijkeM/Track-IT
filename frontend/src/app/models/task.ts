/**
 * Created by Marijke on 30/12/2017.
 */
export class Task {
    constructor(
        public title:String,
        public estimatedTime:Number,
        public userId:String,
        public realTime?:Number,

    ){}
}