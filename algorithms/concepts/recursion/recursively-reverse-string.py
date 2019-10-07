string = ["H", "e", "l", "l", "o"]
class Solution:
    def reverseString(self, s):

        """
        Do not return anything, modify s in-place instead.
        """
        # 2 poiunters swap ends move pointers in by one each time
        def helper(s, start, end):
            if start > end:
                return
            s[start], s[end] = s[end], s[start]
            print(s)
            start += 1
            end -= 1
            helper(s, start, end)
        helper(s, 0, len(s) - 1)


sol = Solution()

sol.reverseString(string)
