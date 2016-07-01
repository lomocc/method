/**
 * 保存方法的参数和this对象,方便后面调用
 * var method = new Method(func, [], this);
 * setTimeout(method.execute, 50);
 * Created by vincent on 16/7/1.
 */
export default class{
    constructor(func, args, context){
        this.func = func;
        this.args = args;
        this.context = context;
    }
    execute(){
        if(this.func)
            return this.func.apply(this.context, this.args);
    }
    static execute(func, args, context){
        if(func)
            return func.apply(context, args);
    }
}