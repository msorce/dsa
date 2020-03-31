def reverse(list_of_chars):
    start = 0
    end = len(list_of_chars) - 1
    # Reverse the input list of chars in place
    # two pointers
    while start < end:
        list_of_chars[start], list_of_chars[end] = list_of_chars[end], list_of_chars[start]
        end -= 1
        start += 1
    print(list_of_chars)
    return list_of_chars
reverse(["h","i"," ", "t", "h", "e", "r", "e"])
