
def reverse_words(message):
    reverse_characters(message, 0, len(message) - 1)
    # Decode the message by reversing the words
    current_word_start = 0
    # need to reverse each word now after reversing entire message
    for i in range(len(message) + 1):
        # find the end of the current word here
        if (i == len(message) or message[i] == " "):
            reverse_characters(message, current_word_start, i - 1)
            current_word_start = i + 1

    print(message)
    return message

def reverse_characters(message, s, e):
    start = s
    end = e
    while start < end:
        message[start], message[end] = message[end], message[start]
        start += 1
        end -= 1


reverse_words(["h", "i", " ", "t", "h", "e", "r", "e"])
