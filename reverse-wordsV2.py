msg = ["h", "i", " ", "t", "h", "e", "r", "e"]


def reverse_words(message):

    reverse_message(message, 0, len(message))

    current_start = 0

    for i in range(len(message) + 1):
        if (message[i] == " " or i == len(message) - 1):

            reverse_message(message, current_start, i)

            current_start = i + 1

    return message

def reverse_message(message, start, end):


    start = start
    end = end

    while start < end:
            message[end], message[start] = message[start], message[end]
            start += 1
            end -= 1

print(reverse_words(msg))
