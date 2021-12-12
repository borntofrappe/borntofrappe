---
title: Testing grounds
entry: 4
---

There's quite a good deal of trial and error in using an experimental tool like SvelteKit, still not released to the public. It is equally frustrating and rewarding. Case in point, today I tried out of few of the features with the log:

- every route is prerendered, given the static nature of the content

- the route listing all the entries and the route responsible for the individual entries are not hydrated on the client. No JavaScript required

- the anchor link elements pointing toward the routes prefetch the information with `sveltekit:prefetch`

Rewarding, but frustrating. Why? Well, ever since version 199 the prefetching feature does not work. There is an issue pointing to a specific commit, but there doesn't seem a quick solution around the corner. Disappointing, especially since it took me such a long time to realize the feature was broken in the first place. I tested the application with version 198, however, and the information is correctly prefetched. At the end of the day I try to look at the positives, and for the time being welcome the fact I know how to install a specific version through npm.
