---
title: Plot twist
entry: 5
---

I kinda complained that the prefetching has been been broken ever since SvelteKit version 199, and you know what led to? Me actually diving in the issue and finding an actual, possibly genuine solution.

If it took a lot for the to realize the feature was broken in the first place, it took me at least five more time to cope with it, but eventually cope with it I did. What's more, there a fresh pull request sent to the main repo with trepidation, mixed with fear and genuine pride.

And all it took was reporting my findings. All it took was researching a method on the MDN docs. And diving into three to four questions on stackoverflow. And more research on custom events and how they actually work. And creating a small demo to reproduce the issue, implement a solution and reuse the same logic in the main repo. And failing before getting reaquainted with event bubbling. And following the guidance of a maintainer all the way through. Very little indeed.
