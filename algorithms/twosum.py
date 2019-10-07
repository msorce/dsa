nums = [1, 8, 4, 6, 3, 7, 9] 
target = 11

# def twoSum(array, target):

#     for i in range(len(array) - 1):
#         for j in range(1, len(array)):
#             if array[i] + array[j] == target:
# #                 return[i, j]
# def twoSum(array, target):
#     seen = {}
#     for i in range(len(array) - 1):
#         complement = target - array[i]
#         if complement in seen:
#             return [seen[complement], i]
#         else:
#             seen[array[i]] = i

#                 return[i, j]
def twoSum(array, target):
    array.sort()
    left = 0
    right = len(array) - 1

    while left <= right:
        match = array[left] + array[right]
        if match == target:
            return [array[left], array[right]]
        elif match > target:
            right -= 1
        else:
            left += 1
    
print(twoSum(nums, target))
