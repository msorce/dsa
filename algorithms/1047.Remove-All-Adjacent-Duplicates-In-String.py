# this is like a version of the valid parens

def removeDuplicates(S):
    stack = []
    for char in S:
        # if there is a stack to pop check if the top is the char
        if stack and stack[-1] == char:
            stack.pop()
        #otherwise add to the top of the stack
        else:
            stack.append(char) # [a]
            print(stack)
        # print(stack)
    return ''.join(stack)
print(removeDuplicates('abbaca'))

"""
['a']
['a', 'b']
['c']
['c', 'a']
ca

"""
