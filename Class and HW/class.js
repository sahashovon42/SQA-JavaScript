class Eleven {
    sum(a, b) {
        const ans = a + b;
        return ans;
    }

    subs(a, b) {
        const SumAns = sum(a, b);
        const SubAns = SumAns - 10;
        return SubAns;
    }
    
}
module.exports =new Eleven();