class Solution {
public:
    int Fibonacci(int n) {
        int f = 0, g = 1;
        while(n-- > 0) {
            g += f;
            f = g - f;
        }
        return f;
    }
};
//测试不同文件修改
//second test