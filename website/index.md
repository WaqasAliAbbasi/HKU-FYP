---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

In recent years, artificial intelligence (AI) has penetrated multiple dimensions of people's daily lives by making the devices they use smarter. Fueled by data, AI programs imitate human intelligence in terms of their learning and behavioral capabilities.

With such widespread usage, however, users demand improved functionalities and speed, pushing developers and data scientists to make their programs smarter in the midst of industry competition. These smarter programs have to deal with more complexities, and developers consequently have to choose whether to prioritize the program's features or performance, posing a dilemma for them.

This project proposes to design an AI application with a distributed architecture instead of a centralized architecture (the more common structure in the status quo) in order to improve its latency and throughput. As proof of concept, the project will specifically examine a complex stock price prediction application and the goal is to transfer it onto a distributed architecture.

The project's objective is to develop tooling and foundation to automatically instantiate and compare distributed systems of a variety of specifications and scheduling algorithms.

There are three milestones in this project. Firstly, the machine learning stage where test models have to be developed and trained. Second, modifying the model serving to work in a distributed manner. Lastly, comparing distributed implementations which is the most crucial aspect of this project.

As of now, the first and second milestones have been reached in which a stock price prediction service has been successfully developed, trained and deployed for a single machine and a cluster. As a result, there is a functioning baseline to which further iterations to the service can be made to better evaluate the viability of a distributed architecture.
Moreover, a metric tool i.e. web app has been developed which measures latency of the service in an architecture-agnostic way.

The project is on track for an enhanced distributed implementation of the stock price prediction service to be developed and compared with non-distributed implementation to assess if latency and throughput could be improved.

Interim Project Report can be accessed [here]({{ site.baseurl }}/assets/InterimReport.pdf).
