---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

Artificial intelligence is an area of computer science which focuses on granting machines the ability to act intelligently. It's a vast field with limitless applications and each application has its own unique solution. Machine learning, specifically, is a subset of artificial intelligence which learns from data. Nowadays we see artificial intelligence everywhere from spam filters to movie recommendations to virtual assistants to self-driving.

As AI application pipelines get complex, inference can take a long time. For instance, a stock price prediction service involves several steps. On a monolith architecture, all tasks have to be done sequentially (even if they are independent of each other). This could take a long time and hence increase the latency. Moreover, until all tasks for a specific request have finished, processing for a new request cannot be started. Thus, the service cannot handle high number of requests in a given time period i.e. throughput.

The project's aim is to improve latency and throughput of AI applications by implementing and deploying them on a distributed system. As a proof of concept, an AI application will be chosen which has a complex inference pipeline and it will be developed on a distributed system.

Detailed Project Plan can be accessed [here]({{ site.baseurl }}/assets/DetailedProjectPlan.pdf).
