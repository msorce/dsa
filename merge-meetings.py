def merge_meetings(meetings_array):
    sorted_meetings = sorted(meetings_array)


    merged_meetings = [sorted_meetings[0]]


    for current_meeting_start, current_meeting_end in sorted_meetings[1:]:

        # doesn't this look a lot like destructuring?
        # we are getting the first end second elements out of the last merged meetings tuple
        last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]

        print("current meeting start", current_meeting_start)
        print("current meeting end", current_meeting_end)
        print("last merged meeting start", last_merged_meeting_start)
        print("last merged meeting end", last_merged_meeting_end)

        # if the current meeting overlaps with the last merged meeting use the
        # later end time of the two
        if (current_meeting_start <= last_merged_meeting_end):
            merged_meetings[-1] = (last_merged_meeting_start, max(last_merged_meeting_end, current_meeting_end))

        else:
            merged_meetings.append((current_meeting_start, current_meeting_end))
    print(merged_meetings)
    return merged_meetings

merge_meetings([(2, 4), (1, 3)])
