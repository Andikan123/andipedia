const courseData = {

"public-health": {
title: "Public Health",
image: "/images/public-health.jpg",
sections:  [
  {
    id: "overview",
    title: "Overview of Public Health",
    content: "Introduction to public health, its goals, and importance in improving population health...",
    media: [{ type: "video", src: "https://www.youtube.com/embed/xxxxx" }]
  },
  {
    id: "epidemiology",
    title: "Epidemiology",
    content: "Study of disease distribution, patterns, and determinants in populations...",
    media: [{ type: "video", src: "https://www.youtube.com/embed/yyyyy" }]
  },
  {
    id: "disease-prevention",
    title: "Disease Prevention and Control",
    content: "Levels of prevention: primary, secondary, and tertiary prevention strategies...",
    media: []
  },
  {
    id: "health-promotion",
    title: "Health Promotion",
    content: "Strategies that enable people to increase control over their health...",
    media: []
  },
  {
    id: "environmental-health",
    title: "Environmental Health",
    content: "How environmental factors like water, air, sanitation affect health...",
    media: []
  },
  {
    id: "community-health",
    title: "Community Health Nursing",
    content: "Nursing practice focused on improving health at community level...",
    media: []
  },
  {
    id: "primary-health-care",
    title: "Primary Health Care (PHC)",
    content: "Essential healthcare accessible to individuals and communities...",
    media: []
  },
  {
    id: "maternal-child-health",
    title: "Maternal and Child Health",
    content: "Care strategies for mothers, infants, and children to reduce mortality...",
    media: []
  },
  {
    id: "immunization",
    title: "Immunization and Vaccination",
    content: "Role of vaccines in preventing communicable diseases...",
    media: []
  },
  {
    id: "communicable-diseases",
    title: "Communicable Diseases",
    content: "Transmission, prevention, and control of infectious diseases...",
    media: []
  },
  {
    id: "non-communicable-diseases",
    title: "Non-Communicable Diseases",
    content: "Chronic diseases like diabetes, hypertension, cancer and their prevention...",
    media: []
  },
  {
    id: "nutrition-public-health",
    title: "Nutrition in Public Health",
    content: "Role of nutrition in preventing disease and promoting wellbeing...",
    media: []
  },
  {
    id: "sanitation-hygiene",
    title: "Sanitation and Hygiene",
    content: "Importance of clean water, hygiene practices, and waste management...",
    media: []
  },
  {
    id: "health-education",
    title: "Health Education",
    content: "Teaching individuals and communities to improve health behaviors...",
    media: []
  },
  {
    id: "biostatistics",
    title: "Biostatistics in Public Health",
    content: "Use of statistics to analyze and interpret health data...",
    media: []
  },
  {
    id: "health-policy",
    title: "Health Policy and Health Systems",
    content: "Structure of healthcare systems and policy making in public health...",
    media: []
  },
  {
    id: "outbreak-investigation",
    title: "Outbreak Investigation",
    content: "Steps involved in identifying and controlling disease outbreaks...",
    media: []
  }
]
},
"biostatistics": {
  title: "Biostatistics",
  image: "/images/biostatistics.jpg",

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: `
<h3>STATISTICS
</h3>

<p>
Statistics is a branch of mathematics dealing with the collection,, interpretation, presentation, and organization of data.
Statistics Field Areas : Demography, Quality Control, Econometrics, Actuarial Studies, Population Ecology, Quantitative psychology, Biostatistics and so on.
</p>
<h3>BROAD DIVISION OF STATISTICS
</h3>
<ul>
<li>Descriptive statistics</li>
<li>Inferential statistics</li>
</ul>

<strong>Descriptive Statistics</strong>: 
<p>Methods for organizing and summarizing information
</p>
<strong>Inferential Statistics</strong>:<p>Methods for drawing and measuring the reliability of conclusions about a population based on information obtained from a sample of the population.
</p>
<h3>BROAD DIVISION OF STATISTICS:
</h3>
<p> Is the branch of statistics that applies statistical methods to medical and biological problems.

It help answer pressing research questions, such as:

Analyzing the effectiveness of new drugs in comparison to current treatments
Determining the relation of specific risk factors to a disease or other health outcomes
To identify health trends within communities, and to evaluate programs

Common Areas of Biostatistics Application In Medical & Medical Allied Field: Public Health, Epidemiology, Bioinformatics, Environmental Health, Population Health, Health Research, Monitoring and Evaluation, Health Sciences etc.
</p>
 
<h3>Some Basic Concepts of Biostatistics</h3>
<strong>Population:</strong>
<p> A collection or set of individuals, objects, or measurements whose properties are to be analyzed. E.g. The height of all the students in  Near East University.

Populations may be finite or infinite. 
   -A population is called finite if it is possible to count its     individuals/objects. E.g . Total number of Doctors in a
 hospital
A population is called infinite if it is not possible to count its individuals/objects. E.g. The number of germs in the body of a sick patient is perhaps something which is uncountable
</p>
<strong>Sampling Unit: </strong>: 
<p>Each member of a population
</p>
<strong>Sample: </strong>: 
<p>A subset of the population, selected in such a way that it is representative of the larger population. For example: The number of babies below 3.50kg  of weight delivered in a hospital
</p>
<strong>Parameter : </strong>: 
<p>A summary value which in some way characterizes the nature of the population in the variable under study.

Example; µ: Average of population
                P:ratio of population

</p>
<strong>Statistics: </strong>: 
<p>A statistic is a sample characteristic
 
 Example: we estimate the sample mean to tell us about the true population mean 

- the sample mean is a ‘statistic’ 

the population mean is a ‘parameter


</p>
<strong>Data: </strong>: 
<p>Set of values of one or more variables recorded on one or more observational units.(singular:datum)
</p>
<strong>Variable: </strong>: 
<p>Is a characteristic or attribute that can  take different values for different subjects.
</p>
<strong>Factor: </strong>: 
<p>A circumstance, fact, or influence that contributes to a result.
</p>


`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/TdN-rqAqbx4" }
      ]
    },

    {
      id: "sampling",
      title: "Sampling",
      content:
        `

<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Sampling Methods
</h1>

<p class="mb-8">
Sampling methods are techniques used to select a subset of a population
for study. They are broadly divided into probability and non-probability
sampling methods.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Probability Sampling
</h2>

<p class="mb-6">
In probability sampling, each member of the population has a known chance
of being selected.
</p>


<h3 class="text-xl font-semibold mt-8 mb-3">
Simple Random Sampling
</h3>

<p>
Every member has equal chance of being selected.
Example: Selecting names by lottery method.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Systematic Sampling
</h3>

<p>
Subjects are selected at regular intervals after a random starting point.
Example: Every 5th patient in a clinic.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Stratified Sampling
</h3>

<p>
Population is divided into subgroups (strata), then samples are drawn
from each group.
Example: Sampling males and females separately.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Cluster Sampling
</h3>

<p>
Population is divided into clusters and entire clusters are selected.
Example: Selecting hospitals rather than individual patients.
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-14 mb-6">
2. Non-Probability Sampling
</h2>

<p class="mb-6">
In non-probability sampling, not all members have equal chances of selection.
</p>


<h3 class="text-xl font-semibold mt-8 mb-3">
Convenience Sampling
</h3>

<p>
Participants are selected because they are easy to access.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Purposive Sampling
</h3>

<p>
Subjects are selected based on particular characteristics.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Quota Sampling
</h3>

<p>
Subjects are selected until a desired number is reached.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Snowball Sampling
</h3>

<p>
Existing participants recruit additional participants.
Useful for hard-to-reach groups.
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-14 mb-6">
3. Comparison of Sampling Methods
</h2>

<div class="overflow-x-auto">
<table class="w-full border border-slate-300 text-left">
<thead class="border-b bg-slate-50">
<tr>
<th class="p-4">Feature</th>
<th class="p-4">Probability</th>
<th class="p-4">Non-Probability</th>
</tr>
</thead>

<tbody>

<tr class="border-b">
<td class="p-4">Bias</td>
<td class="p-4">Lower</td>
<td class="p-4">Higher</td>
</tr>

<tr class="border-b">
<td class="p-4">Cost</td>
<td class="p-4">Higher</td>
<td class="p-4">Lower</td>
</tr>

<tr class="border-b">
<td class="p-4">Generalization</td>
<td class="p-4">Strong</td>
<td class="p-4">Limited</td>
</tr>

</tbody>
</table>
</div>

</div>

`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/Ecsr_osQVow" }
      ]
    },

    {
      id: "descriptive-stats",
      title: "Descriptive Statistics",
      content:
`

<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Descriptive Statistics
</h1>

<p class="mb-8">
Descriptive statistics involves methods used to organize, summarize,
and present data in a meaningful way.
It helps describe the main features of a dataset.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Measures of Central Tendency
</h2>

<p class="mb-6">
Measures of central tendency show the center or typical value of a dataset.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Mean
</h3>

<p>
The arithmetic average of observations.
</p>

:contentReference[oaicite:0]{index=0}

<p class="mt-4">
Example: For 4, 6, and 8
Mean = 6
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Median
</h3>

<p>
The middle value when data are arranged in order.
</p>

<p>
Example:
2, 4, 6, 8, 10

Median = 6
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Mode
</h3>

<p>
The most frequently occurring value.
</p>

<p>
Example:
3, 4, 4, 5

Mode = 4
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-14 mb-6">
2. Measures of Dispersion
</h2>

<p class="mb-6">
Measures of dispersion show how spread out data values are.
</p>



<h3 class="text-xl font-semibold mt-8 mb-3">
Range
</h3>

<p>
Difference between the highest and lowest value.
</p>

<h3 class="text-xl font-semibold mt-8 mb-3">
Variance
</h3>

<p>
Measures how far values differ from the mean.
</p>

<h3 class="text-xl font-semibold mt-8 mb-3">
Standard Deviation
</h3>

<p>
The square root of variance. It indicates average spread around the mean.
</p>


<h2 class="text-2xl font-semibold border-b pb-2 mt-14 mb-6">
3. Summary Table
</h2>

<div class="overflow-x-auto">

<table class="w-full border border-slate-300 text-left">

<thead class="bg-slate-50 border-b">
<tr>
<th class="p-4">Measure</th>
<th class="p-4">Purpose</th>
</tr>
</thead>

<tbody>

<tr class="border-b">
<td class="p-4">Mean</td>
<td class="p-4">Average value</td>
</tr>

<tr class="border-b">
<td class="p-4">Median</td>
<td class="p-4">Middle value</td>
</tr>

<tr class="border-b">
<td class="p-4">Mode</td>
<td class="p-4">Most frequent value</td>
</tr>

<tr class="border-b">
<td class="p-4">Range</td>
<td class="p-4">Spread of values</td>
</tr>

<tr class="border-b">
<td class="p-4">Variance</td>
<td class="p-4">Variation from mean</td>
</tr>

<tr>
<td class="p-4">Standard Deviation</td>
<td class="p-4">Average spread</td>
</tr>

</tbody>

</table>

</div>

</div>

`
,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/__BBNUnhQVY" },
        { type: "video", src: "https://www.youtube.com/embed/1C28DoguzKU" }
      ]
    },

    {
      id: "Normal Distribution",
      title: "Normal Distribution",
      content:
       `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Normal Distribution
</h1>

<p class="mb-8">
The normal distribution is a continuous probability distribution that is symmetric
around the mean, forming a characteristic bell-shaped curve.
It is one of the most important distributions in statistics and biostatistics.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Characteristics of Normal Distribution
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Symmetrical bell-shaped curve</li>
<li>Mean = Median = Mode</li>
<li>Total area under curve equals 1</li>
<li>Defined by mean (μ) and standard deviation (σ)</li>
</ul>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Standard Normal Distribution
</h2>

<p>
A special case where:
</p>

<p class="font-semibold">
Mean = 0, Standard Deviation = 1
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Importance in Statistics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Used in hypothesis testing</li>
<li>Forms basis of many statistical methods</li>
<li>Used in biological and health data analysis</li>
<li>Helps in estimating probabilities</li>
</ul>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Normal Distribution Curve</h2>

<p>
The curve is highest at the mean and tapers symmetrically on both sides.
Most data values cluster around the mean.
</p>

</div>
`,

      media: [
        { type: "video", src: "https://www.youtube.com/embed/Se83MQgY2Tc" }
      ]
    },
    { id: "Poisson Distribution", title: "Poisson Distribution", 
        content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Poisson Distribution
</h1>

<p class="mb-8">
The Poisson distribution is a discrete probability distribution that describes
the number of events occurring within a fixed interval of time or space,
given that these events happen independently and at a constant average rate.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Key Characteristics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Discrete distribution</li>
<li>Events occur independently</li>
<li>Constant average rate (λ)</li>
<li>Used for rare events over time or space</li>
</ul>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Poisson Formula</h2>

<p class="mb-4">
The probability of observing k events is given by:
</p>

<p class="font-semibold">
P(x = k) = (e⁻λ · λᵏ) / k!
</p>

<p class="mt-4">
Where:
<ul class="list-disc pl-6 mt-2">
<li>λ = average number of events</li>
<li>k = number of events</li>
<li>e = Euler’s constant</li>
</ul>
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Applications
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Number of patients arriving at a hospital per hour</li>
<li>Number of births per day in a hospital</li>
<li>Defects in medical equipment</li>
<li>Rare disease occurrence in a population</li>
</ul>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Importance in Biostatistics
</h2>

<p>
Poisson distribution is widely used in epidemiology and public health
to model rare events and count data.
</p>

</div>
`
, 
        media: [ { type: "video", src: "https://www.youtube.com/embed/ncvsn_UsVZI" } ]
     },


     { id: "Binomial Distribution", title: "Binomial Distribution", 
        content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Binomial Distribution
</h1>

<p class="mb-8">
The binomial distribution is a discrete probability distribution that describes
the number of successes in a fixed number of independent trials,
each with the same probability of success.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Characteristics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Fixed number of trials (n)</li>
<li>Each trial has two outcomes: success or failure</li>
<li>Probability of success remains constant (p)</li>
<li>Trials are independent</li>
</ul>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Binomial Formula</h2>

<p class="mb-4">
The probability of getting exactly k successes is:
</p>

<p class="font-semibold">
P(x = k) = nCk · pᵏ · (1 − p)ⁿ⁻ᵏ
</p>

<p class="mt-4">
Where:
<ul class="list-disc pl-6 mt-2">
<li>n = number of trials</li>
<li>k = number of successes</li>
<li>p = probability of success</li>
</ul>
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Applications
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Success or failure of a medical treatment</li>
<li>Number of patients responding to a drug</li>
<li>Pass or fail outcomes in tests</li>
<li>Clinical trial analysis</li>
</ul>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Importance in Biostatistics
</h2>

<p>
The binomial distribution is widely used in clinical research and epidemiology
to analyze binary outcomes such as success/failure or yes/no responses.
</p>

</div>
`, 
        media: [ { type: "video", src: "https://www.youtube.com/embed/t3HM7A-N7r8" }
         ] 
        }
,
    {
      id: "Tables in Statistics",
      title: "Tables in Statistics",
      content:
        `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Tables in Statistics
</h1>

<p class="mb-8">
Statistical tables are a systematic way of organizing data in rows and columns
to make it easier to understand, compare, and analyze.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of a Table
</h2>

<p>
A statistical table is a structured arrangement of data in a grid format consisting
of rows and columns. It helps to simplify large amounts of data for interpretation.
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Parts of a Statistical Table
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Title
</h3>
<p>
Describes what the table is about.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Row Headings
</h3>
<p>
Labels for horizontal entries in the table.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Column Headings
</h3>
<p>
Labels for vertical entries in the table.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Body
</h3>
<p>
Contains the actual data values.
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Types of Statistical Tables
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Simple Table
</h3>
<p>
Shows data for one variable only.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Two-way Table
</h3>
<p>
Displays data for two variables to allow comparison.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Frequency Table
</h3>
<p>
Shows how often each value occurs in a dataset.
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Importance of Tables
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Organizes large data clearly</li>
<li>Makes comparison easier</li>
<li>Helps in analysis and interpretation</li>
<li>Provides a basis for charts and graphs</li>
</ul>

</div>
`,

      media: [
        { type: "video", src: "https://www.youtube.com/embed/FlbZLgtK-No" }
      ]
    },

    {
      id: "hypothesis-testing",
      title: "Hypothesis Testing",
      content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Hypothesis Testing
</h1>

<p class="mb-8">
Hypothesis testing is a statistical method used to make decisions about a population
based on sample data. It helps determine whether an observed result is likely due to chance
or whether there is enough evidence to support a particular claim.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Hypothesis Testing
</h2>

<p>
Hypothesis testing is the process of evaluating assumptions or claims about a population
parameter using sample evidence. It involves setting up hypotheses, collecting data,
analyzing the evidence, and making a statistical decision.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Basic Terms in Hypothesis Testing
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Null Hypothesis (H₀)
</h3>

<p>
The null hypothesis states that there is no effect, no difference,
or no relationship between variables.
It represents the assumption being tested.
</p>

<p>
Example:
There is no difference in blood pressure between patients taking Drug A and Drug B.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Alternative Hypothesis (H₁ or Ha)
</h3>

<p>
The alternative hypothesis states that a significant effect, difference,
or relationship exists.
It is accepted when evidence is strong enough to reject the null hypothesis.
</p>

<p>
Example:
There is a difference in blood pressure between patients taking Drug A and Drug B.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Steps in Hypothesis Testing
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Step 1: State the Hypotheses
</h3>

<p>
Formulate the null hypothesis and the alternative hypothesis.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 2: Choose Significance Level (α)
</h3>

<p>
Select the level of significance, usually 0.05 or 5%.
This represents the acceptable probability of making an error.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 3: Select the Test Statistic
</h3>

<p>
Choose an appropriate statistical test such as Z-test, t-test,
Chi-square test, or ANOVA.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 4: Calculate the Test Statistic
</h3>

<p>
Use sample data to compute the test value.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 5: Make a Decision
</h3>

<p>
Compare the p-value or test statistic to the critical value
and decide whether to reject or fail to reject H₀.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. P-Value
</h2>

<p>
A p-value is the probability of obtaining the observed result,
or something more extreme, if the null hypothesis is true.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>If p ≤ 0.05, reject H₀</li>
<li>If p > 0.05, fail to reject H₀</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Level of Significance
</h2>

<p>
The significance level (α) is the threshold used to determine whether
a result is statistically significant.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>0.05 means 5% risk of error</li>
<li>0.01 means 1% risk of error</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Types of Errors
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Type I Error
</h3>

<p>
Rejecting a true null hypothesis.
This is called a false positive.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Type II Error
</h3>

<p>
Failing to reject a false null hypothesis.
This is called a false negative.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Types of Hypothesis Tests
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
One-Tailed Test
</h3>

<p>
Tests for an effect in only one direction.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Two-Tailed Test
</h3>

<p>
Tests for an effect in both directions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Example of Hypothesis Testing
</h2>

<p>
A researcher wants to know whether a new drug lowers blood pressure.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>H₀: The drug has no effect</li>
<li>H₁: The drug lowers blood pressure</li>
<li>α = 0.05</li>
<li>Calculated p-value = 0.02</li>
</ul>

<p>
Since 0.02 is less than 0.05,
reject the null hypothesis and conclude the drug has a significant effect.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Importance of Hypothesis Testing
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps make objective decisions</li>
<li>Determines whether results are statistically significant</li>
<li>Supports scientific research conclusions</li>
<li>Guides evidence-based practice</li>
<li>Used widely in medical and nursing research</li>
</ul>

</div>
`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/ccccc" }
      ]
    },

    {
      id: "chi-square",
      title: "Chi-Square Test",
     content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Chi-Square Test
</h1>

<p class="mb-8">
The Chi-square test is a non-parametric statistical test used to determine
whether there is a significant association between categorical variables
or whether observed frequencies differ from expected frequencies.
It is widely used in medical research, epidemiology, nursing studies,
and public health investigations.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Chi-Square Test
</h2>

<p>
The Chi-square test compares observed data with what would be expected
if there were no relationship or no difference.
It helps determine whether differences seen in data are due to chance
or represent a real association.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Symbol for Chi-Square
</h2>

<p>
The Chi-square statistic is represented by the Greek letter χ².
</p>

<p>
It is calculated using this formula:
</p>

<p class="font-medium mt-4">
χ² = Σ (O − E)² / E
</p>

<p>
Where:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>O = Observed frequency</li>
<li>E = Expected frequency</li>
<li>Σ = Sum of all values</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Types of Chi-Square Tests
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Chi-Square Test for Independence
</h3>

<p>
Used to determine whether two categorical variables are associated.
</p>

<p>
Example:
Testing whether smoking is associated with lung disease.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Chi-Square Goodness-of-Fit Test
</h3>

<p>
Used to determine whether observed frequencies match an expected distribution.
</p>

<p>
Example:
Testing whether blood groups in a sample follow expected proportions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Steps in Chi-Square Testing
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Step 1: State Hypotheses
</h3>

<p>
Null hypothesis (H₀):
There is no association between variables.
</p>

<p>
Alternative hypothesis (H₁):
There is an association between variables.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 2: Create a Contingency Table
</h3>

<p>
Arrange data in rows and columns.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 3: Calculate Expected Frequencies
</h3>

<p>
Expected frequency is calculated as:
</p>

<p class="font-medium mt-4">
(Row Total × Column Total) / Grand Total
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 4: Compute Chi-Square Value
</h3>

<p>
Substitute observed and expected frequencies into the Chi-square formula.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 5: Make Decision
</h3>

<p>
Compare calculated χ² value with critical value
or use the p-value to decide whether to reject H₀.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Example of Chi-Square Test
</h2>

<p>
Suppose a study investigates whether smoking is associated with lung disease.
</p>

<table class="table-auto border-collapse border border-slate-400 mt-6 mb-6 w-full">
<tr>
<th class="border p-3"> </th>
<th class="border p-3">Disease</th>
<th class="border p-3">No Disease</th>
</tr>

<tr>
<td class="border p-3">Smokers</td>
<td class="border p-3">40</td>
<td class="border p-3">20</td>
</tr>

<tr>
<td class="border p-3">Non-Smokers</td>
<td class="border p-3">25</td>
<td class="border p-3">35</td>
</tr>
</table>

<p>
Observed frequencies are compared with expected frequencies
to calculate χ².
</p>

<p>
If the resulting p-value is less than 0.05,
the association is statistically significant.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Degrees of Freedom
</h2>

<p>
Degrees of freedom for Chi-square are calculated as:
</p>

<p class="font-medium mt-4">
df = (Rows − 1)(Columns − 1)
</p>

<p>
For a 2 × 2 table:
</p>

<p>
df = (2−1)(2−1)=1
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Assumptions of Chi-Square Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Data should be categorical</li>
<li>Observations must be independent</li>
<li>Expected frequencies should generally be 5 or more</li>
<li>Sample should be randomly selected</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Interpretation of P-value
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>If p ≤ 0.05, reject H₀</li>
<li>If p > 0.05, fail to reject H₀</li>
</ul>

<p>
A significant result suggests a relationship exists.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Uses of Chi-Square Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Testing association between diseases and risk factors</li>
<li>Comparing treatment outcomes</li>
<li>Analyzing survey responses</li>
<li>Studying public health patterns</li>
<li>Evaluating categorical research data</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Importance of Chi-Square Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Simple and widely used statistical method</li>
<li>Useful for categorical data analysis</li>
<li>Helps identify significant associations</li>
<li>Supports evidence-based research conclusions</li>
</ul>

</div>
`,

      media: [
        { type: "video", src: "https://www.youtube.com/embed/ddddd" }
      ]
    },

    {
      id: "t-test",
      title: "T-Test",
     content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
T-Test
</h1>

<p class="mb-8">
A t-test is an inferential statistical test used to compare the means
of groups and determine whether the difference between them is statistically significant.
It is commonly used when sample sizes are small and the population standard deviation is unknown.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of a T-Test
</h2>

<p>
A t-test helps determine whether the means of two groups differ significantly
or whether any observed difference could have occurred by chance.
</p>

<p>
It is widely used in medical research, nursing studies,
clinical trials, and experimental investigations.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Purpose of a T-Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Compare averages between groups</li>
<li>Determine whether differences are significant</li>
<li>Support decisions using sample evidence</li>
<li>Test research hypotheses involving means</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Types of T-Tests
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Independent Samples T-Test
</h3>

<p>
Compares the means of two separate independent groups.
</p>

<p>
Example:
Comparing average blood pressure in patients receiving Drug A versus Drug B.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Paired Samples T-Test
</h3>

<p>
Compares means from the same group measured at two different times.
</p>

<p>
Example:
Comparing patient weight before and after an intervention.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
One-Sample T-Test
</h3>

<p>
Compares a sample mean to a known or hypothesized population mean.
</p>

<p>
Example:
Testing whether average patient recovery time differs from 7 days.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Hypotheses in T-Test
</h2>

<p>
Null hypothesis (H₀):
There is no significant difference between means.
</p>

<p>
Alternative hypothesis (H₁):
There is a significant difference between means.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Formula for T-Test
</h2>

<p>
A common formula for comparing two means is:
</p>

<p class="font-medium mt-4">
t = (X̄₁ − X̄₂) / Standard Error
</p>

<p>
Where:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>X̄₁ = Mean of group 1</li>
<li>X̄₂ = Mean of group 2</li>
<li>Standard Error = Estimated variability</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Steps in T-Test
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Step 1: State Hypotheses
</h3>

<p>
Formulate H₀ and H₁.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 2: Choose Significance Level
</h3>

<p>
Usually α = 0.05.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 3: Calculate T-Statistic
</h3>

<p>
Use sample data to compute t-value.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 4: Determine P-value
</h3>

<p>
Use a t-table or software to obtain p-value.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Step 5: Make Decision
</h3>

<p>
If p ≤ 0.05, reject H₀.
If p > 0.05, fail to reject H₀.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Example of a T-Test
</h2>

<p>
Suppose a researcher compares mean pain scores
between patients receiving two treatments.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Drug A mean = 18</li>
<li>Drug B mean = 22</li>
<li>Calculated p-value = 0.03</li>
</ul>

<p>
Since 0.03 is less than 0.05,
reject the null hypothesis and conclude
there is a significant difference between treatments.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Degrees of Freedom
</h2>

<p>
Degrees of freedom influence the critical value in a t-test.
</p>

<p>
For independent t-test:
</p>

<p class="font-medium mt-4">
df = n₁ + n₂ − 2
</p>

<p>
Example:
If each group has 10 participants:
</p>

<p>
df = 10 + 10 − 2 = 18
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Assumptions of T-Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Data should be continuous</li>
<li>Observations should be independent</li>
<li>Data should be approximately normally distributed</li>
<li>Groups should have similar variances (for independent t-test)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Interpretation of P-Value
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>If p ≤ 0.05 → significant difference exists</li>
<li>If p > 0.05 → no significant difference found</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Uses of T-Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Comparing treatment outcomes</li>
<li>Analyzing before-and-after interventions</li>
<li>Comparing control and experimental groups</li>
<li>Clinical and nursing research studies</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
12. Importance of T-Test
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps compare group means objectively</li>
<li>Supports evidence-based decisions</li>
<li>Widely used in inferential statistics</li>
<li>Important tool in health and medical research</li>
</ul>

</div>
`,

      media: [
        { type: "video", src: "https://www.youtube.com/embed/eeeee" }
      ]
    },

    {
      id: "correlation",
      title: "Correlation and Regression",
      content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Correlation
</h1>

<p class="mb-8">
Correlation is a statistical method used to measure the strength and direction
of a relationship between two variables.
It helps determine whether changes in one variable are associated
with changes in another variable.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Correlation
</h2>

<p>
Correlation describes the degree to which two variables move together.
If one variable changes and another tends to change in a predictable way,
a relationship may exist.
</p>

<p>
Examples:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Study time and exam scores</li>
<li>Age and blood pressure</li>
<li>Exercise and heart rate</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Purpose of Correlation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Measure relationships between variables</li>
<li>Determine strength of association</li>
<li>Identify positive or negative relationships</li>
<li>Support prediction and further analysis</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Types of Correlation
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Positive Correlation
</h3>

<p>
As one variable increases, the other also increases.
</p>

<p>
Example:
As study hours increase, test scores may increase.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Negative Correlation
</h3>

<p>
As one variable increases, the other decreases.
</p>

<p>
Example:
As exercise increases, body fat may decrease.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Zero Correlation
</h3>

<p>
No meaningful relationship exists between variables.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Correlation Coefficient
</h2>

<p>
The correlation coefficient is represented by r.
It measures both strength and direction of a relationship.
</p>

<p>
Values range from -1 to +1.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>r = +1 Perfect positive correlation</li>
<li>r = -1 Perfect negative correlation</li>
<li>r = 0 No correlation</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Interpretation of Correlation Strength
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>0.00–0.19 Very weak</li>
<li>0.20–0.39 Weak</li>
<li>0.40–0.59 Moderate</li>
<li>0.60–0.79 Strong</li>
<li>0.80–1.00 Very strong</li>
</ul>

<p>
The sign (+ or -) shows direction,
while the size shows strength.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Pearson Correlation Formula
</h2>

<p>
Pearson’s correlation coefficient is commonly calculated as:
</p>

<p class="font-medium mt-4">
r = Cov(X,Y) / (SxSy)
</p>

<p>
Where:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Cov(X,Y) = Covariance between variables</li>
<li>Sx = Standard deviation of X</li>
<li>Sy = Standard deviation of Y</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Scatter Plot
</h2>

<p>
A scatter plot is a graph used to visualize correlation.
Each point represents paired data values.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Upward pattern suggests positive correlation</li>
<li>Downward pattern suggests negative correlation</li>
<li>No pattern suggests no correlation</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Hypothesis Testing in Correlation
</h2>

<p>
Correlation can be tested statistically.
</p>

<p>
Null hypothesis (H₀):
There is no relationship between variables.
</p>

<p>
Alternative hypothesis (H₁):
A relationship exists between variables.
</p>

<p>
A p-value determines whether the correlation is statistically significant.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Example of Correlation
</h2>

<p>
Suppose study hours and exam scores produce:
</p>

<p>
r = 0.72
</p>

<p>
This indicates a strong positive relationship.
</p>

<p>
If p = 0.01,
the relationship is statistically significant.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Assumptions of Pearson Correlation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Variables should be continuous</li>
<li>Relationship should be linear</li>
<li>Data should be approximately normal</li>
<li>Observations should be independent</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Uses of Correlation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Studying relationships in research</li>
<li>Examining risk factors and outcomes</li>
<li>Predictive analysis</li>
<li>Public health and epidemiologic studies</li>
<li>Medical and nursing investigations</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
12. Important Note
</h2>

<p>
Correlation does not imply causation.
</p>

<p>
Two variables may be associated without one causing the other.
</p>

<p>
Example:
Ice cream sales and drowning may increase together in summer,
but one does not cause the other.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
13. Importance of Correlation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Measures relationships objectively</li>
<li>Supports scientific analysis</li>
<li>Provides basis for regression analysis</li>
<li>Useful for evidence-based decision making</li>
</ul>

</div>
`,

      media: [
        { type: "video", src: "https://www.youtube.com/embed/fffff" }
      ]
    },

    {
      id: "vital-statistics",
      title: "Vital Statistics",
      content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Vital Statistics
</h1>

<p class="mb-8">
Vital statistics refers to numerical data related to important life events
such as births, deaths, marriages, disease occurrence,
and other population health indicators.
It is used to measure the health status of populations
and support planning in public health.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Vital Statistics
</h2>

<p>
Vital statistics is the branch of statistics concerned with the collection,
organization, analysis, and interpretation of data relating to vital events.
</p>

<p>
These data help governments, health institutions,
and researchers monitor population trends.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Vital Events
</h2>

<p>
Vital events are major events occurring in human life.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Births</li>
<li>Deaths</li>
<li>Marriages</li>
<li>Divorces</li>
<li>Disease occurrence</li>
<li>Migration</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Sources of Vital Statistics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Census data</li>
<li>Hospital records</li>
<li>Civil registration systems</li>
<li>Birth and death certificates</li>
<li>Disease surveillance systems</li>
<li>Health surveys</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Important Rates in Vital Statistics
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Birth Rate
</h3>

<p>
Measures the number of live births in a population.
</p>

<p class="font-medium mt-4">
Birth Rate = (Live Births / Population) × 1000
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Death Rate (Mortality Rate)
</h3>

<p>
Measures the number of deaths in a population.
</p>

<p class="font-medium mt-4">
Death Rate = (Deaths / Population) × 1000
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Infant Mortality Rate
</h3>

<p>
Measures deaths of infants under one year of age.
</p>

<p class="font-medium mt-4">
IMR = (Infant Deaths / Live Births) × 1000
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Maternal Mortality Ratio
</h3>

<p>
Measures maternal deaths related to pregnancy and childbirth.
</p>

<p class="font-medium mt-4">
MMR = (Maternal Deaths / Live Births) × 100,000
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Morbidity Measures
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Incidence
</h3>

<p>
Incidence refers to the number of new cases of a disease
occurring in a population during a specified period.
</p>

<p class="font-medium mt-4">
Incidence = (New Cases / Population at Risk)
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Prevalence
</h3>

<p>
Prevalence refers to all existing cases of a disease
at a particular time.
</p>

<p class="font-medium mt-4">
Prevalence = (Existing Cases / Population)
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Difference Between Incidence and Prevalence
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Incidence measures new cases</li>
<li>Prevalence measures all cases</li>
<li>Incidence shows risk of developing disease</li>
<li>Prevalence shows disease burden</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Example
</h2>

<p>
Suppose a town has:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>20,000 population</li>
<li>300 births</li>
<li>120 deaths</li>
<li>50 new malaria cases</li>
<li>200 existing malaria cases</li>
</ul>

<p>
Birth Rate:
</p>

<p>
(300 / 20,000) × 1000 = 15 per 1000
</p>

<p>
Death Rate:
</p>

<p>
(120 / 20,000) × 1000 = 6 per 1000
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Uses of Vital Statistics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Measure population health</li>
<li>Monitor disease patterns</li>
<li>Plan health services</li>
<li>Evaluate health programs</li>
<li>Support policy decisions</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Importance in Public Health
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Identifies health problems in communities</li>
<li>Guides resource allocation</li>
<li>Supports disease prevention strategies</li>
<li>Helps assess health outcomes</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Common Indicators in Vital Statistics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Crude birth rate</li>
<li>Crude death rate</li>
<li>Infant mortality rate</li>
<li>Maternal mortality ratio</li>
<li>Incidence rate</li>
<li>Prevalence rate</li>
<li>Life expectancy</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Limitations
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Incomplete reporting may affect accuracy</li>
<li>Under-registration may occur</li>
<li>Data quality may vary</li>
<li>Some indicators may be misinterpreted without context</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
12. Summary
</h2>

<p>
Vital statistics provides essential numerical measures
for understanding population health.
It includes birth rates, mortality rates,
incidence, prevalence, and other indicators
used in epidemiology and public health planning.
</p>

</div>
`,

      media: [
        { type: "video", src: "https://www.youtube.com/embed/ggggg" }
      ]
    }
  ]
},



pharmacology: {
title: "Pharmacology",
image: "/images/pharmacology.jpg",

sections: [

{
id: "introduction",
title: "Introduction to Pharmacology",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Introduction to Pharmacology
</h1>

<p class="mb-8">
Pharmacology is the branch of medical science concerned with the study of drugs,
their properties, actions, effects, and uses in living organisms.
It examines how drugs interact with the body to produce therapeutic effects
as well as unwanted or toxic effects.
Pharmacology forms the scientific foundation for safe medication use in clinical practice.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Definition of Pharmacology
</h2>

<p>
Pharmacology is the study of drugs and their interaction with biological systems.
It includes understanding how drugs work, how the body handles drugs,
their therapeutic uses, and their adverse effects.
</p>

<p>
A drug is any chemical substance that alters physiological processes
when introduced into the body.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Scope of Pharmacology
</h2>

<p>
The scope of pharmacology covers the discovery, preparation,
administration, action, and evaluation of drugs.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Study of drug sources</li>
<li>Study of drug actions</li>
<li>Study of therapeutic uses</li>
<li>Study of adverse effects</li>
<li>Study of drug safety</li>
<li>Study of drug interactions</li>
</ul>

<p>
Pharmacology applies in medicine, nursing,
pharmacy, toxicology, and biomedical research.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Sources of Drugs
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Plant Sources
</h3>

<p>
Some drugs are obtained from plants.
</p>

<p>
Examples:
Morphine from opium poppy,
Atropine from belladonna.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Animal Sources
</h3>

<p>
Some drugs originate from animals.
</p>

<p>
Example:
Insulin was historically derived from animal sources.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Microorganisms
</h3>

<p>
Some antibiotics are derived from microorganisms.
</p>

<p>
Example:
Penicillin.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Synthetic Sources
</h3>

<p>
Many modern drugs are produced in laboratories.
</p>

<p>
Example:
Paracetamol.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Biotechnology-Derived Drugs
</h3>

<p>
Modern pharmacology includes drugs produced through biotechnology.
</p>

<p>
Examples:
Monoclonal antibodies and gene-based therapies.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Branches of Pharmacology
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Pharmacokinetics
</h3>

<p>
Pharmacokinetics describes what the body does to the drug.
It includes absorption, distribution, metabolism, and excretion.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Absorption</li>
<li>Distribution</li>
<li>Metabolism</li>
<li>Excretion</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
Pharmacodynamics
</h3>

<p>
Pharmacodynamics describes what the drug does to the body.
It studies mechanisms of action and effects at receptors.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Therapeutics
</h3>

<p>
Deals with the use of drugs in prevention and treatment of disease.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Toxicology
</h3>

<p>
Studies harmful effects of drugs and poisons.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Clinical Pharmacology
</h3>

<p>
Applies pharmacological principles to patient care.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Basic Concepts in Pharmacology
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Drug
</h3>

<p>
A substance used for diagnosis, prevention,
treatment or relief of disease.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Dose
</h3>

<p>
The amount of drug administered.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Therapeutic Effect
</h3>

<p>
The intended beneficial effect of a drug.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Side Effect
</h3>

<p>
An unintended effect occurring at normal doses.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Toxic Effect
</h3>

<p>
A harmful effect produced by excessive drug action.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Importance of Pharmacology in Clinical Practice
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Promotes safe medication administration</li>
<li>Helps prevent medication errors</li>
<li>Supports rational drug use</li>
<li>Improves patient outcomes</li>
<li>Guides monitoring for adverse reactions</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Importance in Nursing Practice
</h2>

<p>
Nurses apply pharmacology during medication administration
and patient monitoring.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Correct drug administration</li>
<li>Observation of therapeutic effects</li>
<li>Monitoring adverse reactions</li>
<li>Patient education about medications</li>
<li>Prevention of medication errors</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Factors Influencing Drug Action
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Age</li>
<li>Body weight</li>
<li>Genetic factors</li>
<li>Organ function</li>
<li>Drug interactions</li>
<li>Disease conditions</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Examples of Drugs and Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Paracetamol for pain and fever</li>
<li>Amoxicillin for bacterial infection</li>
<li>Insulin for diabetes management</li>
<li>Salbutamol for asthma</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
Pharmacology is the science of drugs and their effects on the body.
It includes drug sources, branches such as pharmacokinetics and pharmacodynamics,
and principles necessary for safe clinical practice.
It is fundamental to medicine, nursing, and patient care.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/aaaaa" }
]
},

{
id: "drug-classification",
title: "Drug Classification",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Drug Classification
</h1>

<p class="mb-8">
Drug classification is the systematic grouping of drugs based on their therapeutic use,
mechanism of action, or chemical structure. It helps healthcare professionals understand
drug actions, predict effects, and ensure safe clinical use.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Classification by Therapeutic Use
</h2>

<p>
This classification is based on the disease or condition a drug is used to treat.
It is the most commonly used system in clinical practice.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
A. Analgesics (Pain Relievers)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Paracetamol (Acetaminophen) – mild to moderate pain and fever</li>
<li>Morphine – severe pain</li>
<li>Codeine – mild to moderate pain and cough suppression</li>
<li>Ibuprofen – pain and inflammation</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
B. Antibiotics (Treat Bacterial Infections)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Amoxicillin – respiratory and ear infections</li>
<li>Penicillin – streptococcal infections</li>
<li>Ciprofloxacin – urinary tract infections</li>
<li>Azithromycin – respiratory tract infections</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
C. Antipyretics (Reduce Fever)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Paracetamol</li>
<li>Ibuprofen</li>
<li>Aspirin</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
D. Antihypertensives (Lower Blood Pressure)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Amlodipine</li>
<li>Lisinopril</li>
<li>Losartan</li>
<li>Propranolol</li>
<li>Hydrochlorothiazide</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
E. Antidiabetics (Control Blood Sugar)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Insulin</li>
<li>Metformin</li>
<li>Glibenclamide</li>
<li>Glipizide</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
F. Antihistamines (Allergy Relief)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Diphenhydramine</li>
<li>Loratadine</li>
<li>Chlorpheniramine</li>
</ul>



<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Classification by Mechanism of Action
</h2>

<p>
This classification is based on how drugs produce their effects at the cellular or molecular level.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Beta-Adrenergic Blockers (Beta-Blockers)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Propranolol – hypertension, anxiety</li>
<li>Atenolol – hypertension, angina</li>
<li>Metoprolol – heart failure, hypertension</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
B. Calcium Channel Blockers
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Amlodipine – hypertension</li>
<li>Verapamil – arrhythmia</li>
<li>Diltiazem – angina and hypertension</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
C. ACE Inhibitors
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Lisinopril</li>
<li>Enalapril</li>
<li>Captopril</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
D. Antibiotics (Cell Wall Inhibitors)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Penicillin</li>
<li>Cephalosporins (Ceftriaxone, Cefuroxime)</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
E. NSAIDs (Prostaglandin Inhibitors)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Ibuprofen</li>
<li>Aspirin</li>
<li>Diclofenac</li>
</ul>



<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Classification by Chemical Structure
</h2>

<p>
This classification groups drugs based on their molecular structure.
Drugs in the same class often have similar properties and actions.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Beta-Lactam Antibiotics
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Penicillin</li>
<li>Amoxicillin</li>
<li>Cephalosporins (Ceftriaxone, Cefalexin)</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
B. Sulfonamides
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Sulfamethoxazole</li>
<li>Trimethoprim-Sulfamethoxazole (Co-trimoxazole)</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
C. Benzodiazepines
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Diazepam – anxiety, seizures</li>
<li>Lorazepam – sedation, anxiety</li>
<li>Midazolam – anesthesia induction</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
D. Opioids
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Morphine – severe pain</li>
<li>Codeine – mild to moderate pain</li>
<li>Fentanyl – strong analgesia</li>
<li>Tramadol – moderate pain relief</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
E. Antidepressants (Chemical Classes)
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>SSRIs – Fluoxetine, Sertraline</li>
<li>TCAs – Amitriptyline, Imipramine</li>
<li>MAO inhibitors – Phenelzine</li>
</ul>



<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Importance of Drug Classification
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps organize large numbers of drugs</li>
<li>Makes learning pharmacology easier</li>
<li>Assists in clinical decision-making</li>
<li>Helps predict drug actions and side effects</li>
<li>Improves safe prescribing and nursing practice</li>
</ul>



<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Summary
</h2>

<p>
Drugs are classified based on therapeutic use, mechanism of action, and chemical structure.
Each system provides a different way of understanding how drugs work and how they should be used
in clinical practice. This classification is essential for safe and effective patient care.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/bbbbb" }
]
},

{
id: "pharmacokinetics",
title: "Pharmacokinetics",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Pharmacokinetics (ADME)
</h1>

<p class="mb-8">
Pharmacokinetics is the branch of pharmacology that studies what the body does to a drug.
It describes how a drug is absorbed, distributed, metabolized, and excreted (ADME).
These processes determine the onset, intensity, and duration of drug action in the body.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Pharmacokinetics
</h2>

<p>
Pharmacokinetics is the study of the movement of drugs within the body over time.
It explains how the body handles a drug from the moment it is administered
until it is completely eliminated.
</p>

<p>
The four major processes involved are:
Absorption, Distribution, Metabolism, and Excretion (ADME).
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Absorption
</h2>

<p>
Absorption is the process by which a drug moves from its site of administration
into the bloodstream.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Factors affecting absorption:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Route of administration (oral, IV, IM, etc.)</li>
<li>Drug formulation</li>
<li>Blood flow to the site</li>
<li>pH of the environment</li>
<li>Lipid solubility of the drug</li>
</ul>

<p>
Example:
Oral drugs must pass through the gastrointestinal tract before entering circulation.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Distribution
</h2>

<p>
Distribution is the process by which a drug is transported
from the bloodstream to body tissues and organs.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Factors affecting distribution:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Blood flow to tissues</li>
<li>Protein binding in plasma</li>
<li>Ability to cross cell membranes</li>
<li>Fat solubility of the drug</li>
</ul>

<p>
Example:
Highly lipid-soluble drugs can easily enter the brain and fat tissues.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Metabolism (Biotransformation)
</h2>

<p>
Metabolism is the process by which the body chemically changes a drug,
usually into a more water-soluble form for easier elimination.
</p>

<p>
It mainly occurs in the liver.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Phases of metabolism:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Phase I: Modification reactions (oxidation, reduction, hydrolysis)</li>
<li>Phase II: Conjugation reactions (glucuronidation, sulfation)</li>
</ul>

<p>
Example:
Paracetamol is metabolized in the liver before excretion.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Excretion
</h2>

<p>
Excretion is the removal of drugs and their metabolites from the body.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Routes of excretion:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Kidneys (urine) – most common route</li>
<li>Liver (bile and feces)</li>
<li>Lungs (expired air)</li>
<li>Sweat glands</li>
<li>Breast milk</li>
</ul>

<p>
Example:
Many drugs are excreted unchanged in urine through the kidneys.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Importance of Pharmacokinetics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps determine correct drug dosage</li>
<li>Ensures safe drug administration</li>
<li>Predicts duration of drug action</li>
<li>Helps avoid drug toxicity</li>
<li>Guides drug selection in patients with organ failure</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Clinical Relevance
</h2>

<p>
Pharmacokinetics is essential in clinical practice because it helps healthcare professionals
adjust drug doses based on patient factors such as age, kidney function, and liver function.
</p>

<p>
For example, patients with kidney disease may require lower doses of certain drugs
to prevent accumulation and toxicity.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Summary of ADME
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Absorption – drug enters the bloodstream</li>
<li>Distribution – drug spreads to tissues</li>
<li>Metabolism – drug is chemically modified</li>
<li>Excretion – drug is eliminated from the body</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Key Idea
</h2>

<p>
Pharmacokinetics determines what happens to a drug in the body over time,
and directly influences how effective and safe a medication will be in a patient.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" }
]
},

{
id: "pharmacodynamics",
title: "Pharmacodynamics",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Pharmacodynamics
</h1>

<p class="mb-8">
Pharmacodynamics is the branch of pharmacology that studies what drugs do to the body.
It focuses on the biological and physiological effects of drugs,
their mechanisms of action, receptor interactions, and the relationship between drug dose and response.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Pharmacodynamics
</h2>

<p>
Pharmacodynamics describes how drugs produce their effects in the body.
It explains the interaction between drugs and target sites such as receptors, enzymes, or ion channels,
and how these interactions lead to therapeutic or toxic effects.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Drug Action
</h2>

<p>
Drug action refers to the way a drug produces a biological effect in the body.
This occurs when a drug binds to a specific target and triggers a response.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Types of drug action:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Stimulation – increases activity of cells or organs</li>
<li>Depression – decreases activity of cells or organs</li>
<li>Irritation – causes inflammation or tissue response</li>
<li>Replacement – supplies substances the body lacks (e.g., insulin)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Drug Receptors
</h2>

<p>
Receptors are specific protein molecules located on cell surfaces or inside cells
that bind to drugs and mediate their effects.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Types of receptors:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Cell surface receptors – found on cell membranes</li>
<li>Intracellular receptors – found inside the cell</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Key concepts:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Affinity – ability of a drug to bind to a receptor</li>
<li>Efficacy – ability of a drug to produce a response</li>
<li>Agonist – activates a receptor</li>
<li>Antagonist – blocks a receptor</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Dose-Response Relationship
</h2>

<p>
The dose-response relationship describes how the effect of a drug changes with the dose administered.
As the dose increases, the effect usually increases until a maximum response is reached.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Types:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Graded dose-response – effect increases with dose in a single individual</li>
<li>Quantal dose-response – measures response in a population (all-or-none effect)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Dose-Response Curve
</h2>

<p>
A dose-response curve is a graphical representation showing the relationship between drug dose and effect.
It helps determine:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Minimum effective dose</li>
<li>Maximum effect</li>
<li>Potency of a drug</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Potency and Efficacy
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Potency
</h3>
<p>
Potency refers to the amount of drug needed to produce a given effect.
A more potent drug produces an effect at a lower dose.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Efficacy
</h3>
<p>
Efficacy refers to the maximum effect a drug can produce regardless of dose.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Mechanism of Action
</h2>

<p>
Mechanism of action explains how a drug produces its effect at the molecular level.
Drugs may act by binding to receptors, inhibiting enzymes, or altering ion channels.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Paracetamol – inhibits prostaglandin synthesis in the brain</li>
<li>Penicillin – inhibits bacterial cell wall synthesis</li>
<li>Propranolol – blocks beta-adrenergic receptors</li>
<li>Insulin – promotes glucose uptake into cells</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Factors Affecting Drug Response
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Age</li>
<li>Body weight</li>
<li>Genetics</li>
<li>Disease states</li>
<li>Drug interactions</li>
<li>Tolerance and dependence</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps predict drug effects in patients</li>
<li>Guides safe and effective drug use</li>
<li>Assists in choosing correct drug and dose</li>
<li>Prevents adverse drug reactions</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
Pharmacodynamics explains what drugs do to the body.
It includes drug action, receptor interaction, dose-response relationships,
and mechanisms of action. Together with pharmacokinetics, it forms the foundation of rational drug therapy.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},

{
id: "routes-administration",
title: "Routes of Drug Administration",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Routes of Drug Administration
</h1>

<p class="mb-8">
Routes of drug administration refer to the different ways drugs are introduced into the body
to produce their therapeutic effects. The route chosen affects the speed, intensity,
and duration of drug action as well as patient safety and convenience.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Routes of Administration
</h2>

<p>
A route of administration is the path by which a drug is taken into the body
and delivered to its site of action.
Different routes are used depending on the condition being treated,
the drug properties, and the urgency of treatment.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Oral Route (PO)
</h2>

<p>
The oral route is the most common method of drug administration,
where drugs are taken through the mouth and absorbed in the gastrointestinal tract.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Advantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Easy and convenient</li>
<li>Safe and non-invasive</li>
<li>Cost-effective</li>
<li>Suitable for self-administration</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Disadvantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Slow onset of action</li>
<li>May be affected by food or stomach acid</li>
<li>Not suitable for unconscious patients</li>
</ul>

<p>
Example: Paracetamol tablets, antibiotics like Amoxicillin.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Intravenous (IV) Route
</h2>

<p>
The intravenous route involves injecting drugs directly into the bloodstream through a vein.
It provides immediate drug action.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Advantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Rapid onset of action</li>
<li>100% bioavailability</li>
<li>Suitable for emergencies</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Disadvantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Requires skill to administer</li>
<li>Risk of infection</li>
<li>Irreversible once administered</li>
</ul>

<p>
Example: Normal saline, IV antibiotics.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Intramuscular (IM) Route
</h2>

<p>
Drugs are injected into a muscle where they are absorbed into the bloodstream.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Advantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Faster absorption than oral route</li>
<li>Suitable for moderate volumes</li>
<li>Useful for depot (long-acting) drugs</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Disadvantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Painful</li>
<li>Risk of nerve injury</li>
<li>Requires sterile technique</li>
</ul>

<p>
Example: Vaccines, Diclofenac injection.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Subcutaneous (SC) Route
</h2>

<p>
Drugs are injected into the tissue layer beneath the skin.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Advantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Slow and sustained absorption</li>
<li>Easy to administer</li>
<li>Suitable for self-injection</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Disadvantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Limited volume</li>
<li>Not suitable for irritant drugs</li>
</ul>

<p>
Example: Insulin, Heparin.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Topical Route
</h2>

<p>
Drugs are applied directly to the skin or mucous membranes for local effect.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Skin creams (e.g., hydrocortisone)</li>
<li>Eye drops</li>
<li>Nasal sprays</li>
<li>Ear drops</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Advantages:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Local effect with minimal systemic action</li>
<li>Easy application</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Other Routes of Administration
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Inhalation
</h3>
<p>
Drugs are inhaled into the lungs for rapid absorption.
Example: Salbutamol inhaler for asthma.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Sublingual
</h3>
<p>
Drug is placed under the tongue for rapid absorption into the bloodstream.
Example: Nitroglycerin.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Rectal Route
</h3>
<p>
Drugs are administered through the rectum, useful when oral route is not possible.
Example: Suppositories like paracetamol.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Factors Affecting Choice of Route
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Patient condition (conscious or unconscious)</li>
<li>Speed of drug action required</li>
<li>Drug properties</li>
<li>Duration of therapy</li>
<li>Safety considerations</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Importance of Routes of Administration
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Determines speed of drug action</li>
<li>Affects drug absorption and bioavailability</li>
<li>Improves treatment effectiveness</li>
<li>Ensures patient safety and comfort</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
Routes of drug administration describe how drugs enter the body.
Each route has advantages and disadvantages, and the choice depends on
the drug type, patient condition, and desired therapeutic effect.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/eeeee" }
]
},

{
id: "dosage-calculation",
title: "Drug Dosage Calculations",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Drug Dosage Calculations
</h1>

<p class="mb-8">
Drug dosage calculation is the process of determining the correct dose of medication
to administer to a patient safely and effectively. It ensures that patients receive
the right amount of drug to achieve therapeutic effects while avoiding toxicity.
It is a critical skill in nursing and clinical practice.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Drug Dosage Calculation
</h2>

<p>
Drug dosage calculation involves using mathematical principles to determine
the correct drug dose based on prescribed orders, drug concentration,
and patient-specific factors such as weight or age.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Importance of Dosage Calculation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Ensures patient safety</li>
<li>Prevents medication errors</li>
<li>Achieves therapeutic effectiveness</li>
<li>Helps avoid underdose or overdose</li>
<li>Essential for nursing and clinical practice</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Basic Principles of Dosage Calculation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Understand the doctor’s prescription (ordered dose)</li>
<li>Know the available drug strength (stock dose)</li>
<li>Use correct mathematical formula</li>
<li>Ensure unit consistency</li>
<li>Double-check calculations for safety</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Basic Formula for Drug Calculation
</h2>

<p>
The most commonly used formula is:
</p>

<p class="font-medium mt-4">
Dose to be given = (Desired dose / Stock dose) × Volume
</p>

<p>
Where:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Desired dose = prescribed dose</li>
<li>Stock dose = drug available on hand</li>
<li>Volume = form in which drug is supplied</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Unit Conversions in Dosage Calculation
</h2>

<p>
Correct unit conversion is essential for safe medication administration.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Common Conversions:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>1 g = 1000 mg</li>
<li>1 mg = 1000 mcg</li>
<li>1 L = 1000 mL</li>
<li>1 mL = 1 cc</li>
</ul>

<p>
Example:
Convert 2 g to mg:
2 g = 2000 mg
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Weight-Based Dosage Calculation
</h2>

<p>
Some drugs are calculated based on body weight.
</p>

<p>
Formula:
</p>

<p class="font-medium mt-4">
Dose = mg per kg × Body weight (kg)
</p>

<p>
Example:
If a drug is 10 mg/kg and patient weighs 20 kg:
</p>

<p>
Dose = 10 × 20 = 200 mg
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. IV Flow Rate Calculation
</h2>

<p>
IV fluids are often calculated using flow rate.
</p>

<p class="font-medium mt-4">
Flow rate (mL/hr) = Total volume / Time (hours)
</p>

<p>
Example:
1000 mL over 8 hours:
</p>

<p>
Flow rate = 1000 ÷ 8 = 125 mL/hr
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Safety Principles in Dosage Calculation
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Always double-check calculations</li>
<li>Use correct units</li>
<li>Follow prescription accurately</li>
<li>Be aware of maximum safe doses</li>
<li>Confirm patient identity before administration</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Common Sources of Error
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Wrong unit conversion</li>
<li>Misreading prescriptions</li>
<li>Decimal point errors</li>
<li>Incorrect calculations</li>
<li>Confusing drug concentrations</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Clinical Importance
</h2>

<p>
Accurate drug dosage calculation is essential in clinical practice
because even small errors can lead to serious consequences such as toxicity,
treatment failure, or patient harm.
</p>


<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Simple Tablet Calculation Examples
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Example 1
</h3>
<p>
Doctor prescribes 500 mg. Tablets available: 250 mg.
</p>

<p>
Calculation:
500 ÷ 250 = 2 tablets
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 2
</h3>
<p>
Prescribed dose: 750 mg. Stock: 250 mg tablets.
</p>

<p>
750 ÷ 250 = 3 tablets
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 3
</h3>
<p>
Prescribed dose: 125 mg. Stock: 250 mg tablets.
</p>

<p>
125 ÷ 250 = 0.5 tablet (half tablet)
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Liquid Drug Calculations
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Example 4
</h3>
<p>
Order: 200 mg. Stock: 100 mg per 5 mL.
</p>

<p>
(200 ÷ 100) × 5 = 10 mL
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 5
</h3>
<p>
Order: 50 mg. Stock: 25 mg per 2 mL.
</p>

<p>
(50 ÷ 25) × 2 = 4 mL
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 6
</h3>
<p>
Order: 300 mg. Stock: 150 mg per 3 mL.
</p>

<p>
(300 ÷ 150) × 3 = 6 mL
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Weight-Based Calculations
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Example 7
</h3>
<p>
Dose: 10 mg/kg. Patient weight: 30 kg.
</p>

<p>
10 × 30 = 300 mg
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 8
</h3>
<p>
Dose: 5 mg/kg. Patient weight: 60 kg.
</p>

<p>
5 × 60 = 300 mg
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 9
</h3>
<p>
Dose: 2 mg/kg. Patient weight: 25 kg.
</p>

<p>
2 × 25 = 50 mg
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. IV Flow Rate Examples
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Example 10
</h3>
<p>
1000 mL over 8 hours.
</p>

<p>
1000 ÷ 8 = 125 mL/hr
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 11
</h3>
<p>
500 mL over 4 hours.
</p>

<p>
500 ÷ 4 = 125 mL/hr
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 12
</h3>
<p>
1500 mL over 10 hours.
</p>

<p>
1500 ÷ 10 = 150 mL/hr
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Unit Conversion Examples
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Example 13
</h3>
<p>
Convert 2 g to mg:
</p>
<p>
2 × 1000 = 2000 mg
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 14
</h3>
<p>
Convert 750 mg to g:
</p>
<p>
750 ÷ 1000 = 0.75 g
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 15
</h3>
<p>
Convert 5000 mcg to mg:
</p>
<p>
5000 ÷ 1000 = 5 mg
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Mixed Clinical Examples
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Example 16
</h3>
<p>
Order: 1 g. Stock: 500 mg tablets.
</p>

<p>
1 g = 1000 mg
1000 ÷ 500 = 2 tablets
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 17
</h3>
<p>
Order: 600 mg. Stock: 300 mg per tablet.
</p>

<p>
600 ÷ 300 = 2 tablets
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Example 18
</h3>
<p>
Order: 1.5 g IV drug. Stock: 500 mg per vial.
</p>

<p>
1.5 g = 1500 mg
1500 ÷ 500 = 3 vials
</p>





<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Summary
</h2>

<p>
Drug dosage calculation involves determining the correct amount of medication
to administer using formulas, unit conversions, and weight-based calculations.
It is a critical safety skill in nursing and healthcare practice.
</p>


</div>

`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/fffff" }
]
},

{
id: "adverse-effects",
title: "Adverse Drug Reactions",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Adverse Drug Reactions (ADRs)
</h1>

<p class="mb-8">
Adverse drug reactions (ADRs) are unwanted, harmful, or unintended effects of a drug
that occur at normal doses used for prevention, diagnosis, or treatment of disease.
They are an important aspect of pharmacology because they affect patient safety,
treatment outcomes, and medication compliance.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Adverse Drug Reactions
</h2>

<p>
An adverse drug reaction is any harmful or unpleasant response caused by a medication
when it is used at normal therapeutic doses.
ADRs may range from mild discomfort to severe, life-threatening conditions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Types of Adverse Drug Reactions
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Side Effects
</h3>

<p>
Side effects are predictable and often unavoidable effects of a drug,
which occur at normal doses.
</p>

<p>
Examples:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Drowsiness from antihistamines (e.g., chlorpheniramine)</li>
<li>Dry mouth from antidepressants</li>
<li>Nausea from antibiotics</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
B. Toxic Effects
</h3>

<p>
Toxic effects occur when a drug accumulates in the body or is given in excessive doses,
leading to harmful effects.
</p>

<p>
Examples:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Paracetamol overdose causing liver damage</li>
<li>Digoxin toxicity causing arrhythmia</li>
<li>Opioid overdose causing respiratory depression</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
C. Allergic Reactions (Hypersensitivity)
</h3>

<p>
These are immune system responses to a drug that are not related to dose.
They can be mild or severe (life-threatening).
</p>

<p>
Examples:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Rash from penicillin</li>
<li>Anaphylaxis from antibiotics</li>
<li>Skin itching from sulfonamides</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
D. Idiosyncratic Reactions
</h3>

<p>
These are unusual and unpredictable reactions due to genetic differences in patients.
</p>

<p>
Examples:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Severe hemolysis in G6PD-deficient patients after certain drugs</li>
<li>Unusual sedation or excitement from sedatives</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
E. Drug Dependence and Tolerance
</h3>

<p>
Dependence occurs when a patient becomes physically or psychologically reliant on a drug.
Tolerance occurs when higher doses are needed to achieve the same effect.
</p>

<p>
Examples:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Opioids (morphine dependence)</li>
<li>Benzodiazepines (diazepam dependence)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Adverse Drug Events (ADEs)
</h2>

<p>
An adverse drug event refers to any injury or harm resulting from medication use,
including errors in prescribing, dispensing, or administration.
</p>

<p>
Example:
Giving the wrong drug dose leading to overdose is an adverse drug event.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Factors That Increase Risk of ADRs
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Age (elderly and infants are more vulnerable)</li>
<li>Multiple drug use (polypharmacy)</li>
<li>Liver or kidney disease</li>
<li>Genetic factors</li>
<li>Drug interactions</li>
<li>Incorrect dosage or administration</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Prevention of ADRs
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Careful drug history taking</li>
<li>Correct dosage calculation</li>
<li>Avoiding unnecessary drug combinations</li>
<li>Monitoring patient response</li>
<li>Educating patients about side effects</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Monitor patients after drug administration</li>
<li>Recognize early signs of adverse reactions</li>
<li>Report serious reactions immediately</li>
<li>Document all drug reactions accurately</li>
<li>Educate patients on what symptoms to report</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Clinical Importance
</h2>

<p>
Understanding adverse drug reactions is essential for safe patient care.
It helps healthcare professionals prevent harm, improve treatment outcomes,
and ensure rational use of medications.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Summary
</h2>

<p>
Adverse drug reactions include side effects, toxicity, allergic reactions,
idiosyncratic responses, and drug dependence.
They are important safety considerations in pharmacology and clinical practice.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ggggg" }
]
},

{
id: "drug-interactions",
title: "Drug Interactions",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Drug Interactions
</h1>

<p class="mb-8">
Drug interactions occur when the effect of one drug is altered by another drug, food, or herbal product.
This may increase, decrease, or change the action of a drug, leading to improved effects, reduced effectiveness,
or harmful outcomes. Understanding drug interactions is essential for safe clinical practice.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Drug Interactions
</h2>

<p>
A drug interaction happens when one substance affects the pharmacological action of another substance.
These interactions can occur between drugs, drugs and food, or drugs and herbal products.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Types of Drug Interactions
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Drug–Drug Interactions
</h3>

<p>
This occurs when one drug affects the action of another drug when taken together.
</p>

<p><strong>Examples:</strong></p>

<ul class="list-disc pl-6 space-y-2">
<li>Warfarin + Aspirin → increased risk of bleeding</li>
<li>Antibiotics + Oral contraceptives → reduced contraceptive effectiveness</li>
<li>NSAIDs + Antihypertensives → reduced blood pressure control</li>
<li>Alcohol + Sedatives → increased drowsiness and respiratory depression</li>
</ul>




<h3 class="text-xl font-semibold mt-6 mb-3">
B. Drug–Food Interactions
</h3>

<p>
This occurs when food affects the absorption or action of a drug.
</p>

<p><strong>Examples:</strong></p>

<ul class="list-disc pl-6 space-y-2">
<li>Tetracycline + Dairy products → reduced drug absorption</li>
<li>Warfarin + Vitamin K-rich foods (leafy vegetables) → reduced anticoagulant effect</li>
<li>Grapefruit juice + Statins → increased drug toxicity</li>
<li>Alcohol + Metronidazole → severe nausea and vomiting</li>
</ul>




<h3 class="text-xl font-semibold mt-6 mb-3">
C. Drug–Herb Interactions
</h3>

<p>
This occurs when herbal products affect drug activity.
</p>

<p><strong>Examples:</strong></p>

<ul class="list-disc pl-6 space-y-2">
<li>Ginkgo biloba + Anticoagulants → increased bleeding risk</li>
<li>St. John’s Wort + Antidepressants → reduced drug effectiveness</li>
<li>Garlic supplements + Warfarin → increased bleeding tendency</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Mechanisms of Drug Interactions
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Pharmacokinetic Interactions
</h3>

<p>
These affect ADME processes (Absorption, Distribution, Metabolism, Excretion).
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Absorption: food reducing drug uptake</li>
<li>Metabolism: drugs competing in liver enzymes (e.g., CYP450 system)</li>
<li>Excretion: drugs affecting kidney elimination</li>
</ul>




<h3 class="text-xl font-semibold mt-6 mb-3">
B. Pharmacodynamic Interactions
</h3>

<p>
These occur when drugs act on the same receptor or physiological system.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Additive effect: two drugs produce combined effect (e.g., alcohol + sedatives)</li>
<li>Synergistic effect: enhanced effect (e.g., alcohol + benzodiazepines)</li>
<li>Antagonistic effect: one drug reduces another’s effect (e.g., naloxone + morphine)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Factors That Influence Drug Interactions
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Number of drugs taken (polypharmacy)</li>
<li>Age of patient</li>
<li>Liver and kidney function</li>
<li>Genetic differences</li>
<li>Timing of drug administration</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Clinical Importance of Drug Interactions
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps prevent adverse drug reactions</li>
<li>Improves treatment effectiveness</li>
<li>Reduces risk of toxicity</li>
<li>Guides safe prescribing practices</li>
<li>Enhances patient safety in polypharmacy cases</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Review patient medication history</li>
<li>Monitor for signs of drug interactions</li>
<li>Educate patients on food and drug restrictions</li>
<li>Report and document any adverse reactions</li>
<li>Ensure correct timing of medication administration</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Summary
</h2>

<p>
Drug interactions occur when drugs, food, or herbs affect the action of medications.
They may increase, decrease, or alter drug effects and can lead to serious clinical consequences.
Understanding these interactions is essential for safe and effective patient care.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/hhhhh" }
]
},

{
id: "antibiotics",
title: "Antibiotics",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Antibiotics
</h1>

<p class="mb-8">
Antibiotics are a group of antimicrobial drugs used to treat bacterial infections by killing bacteria
or inhibiting their growth. They are among the most important discoveries in medicine and are widely used
in clinical practice to treat infectious diseases.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Antibiotics
</h2>

<p>
Antibiotics are chemical substances produced by microorganisms or synthesized in laboratories
that selectively kill or inhibit the growth of bacteria without significantly harming the host cells.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Classification of Antibiotics
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Based on Mechanism of Action
</h3>



<h4 class="text-lg font-semibold mt-4 mb-2">
1. Cell Wall Synthesis Inhibitors
</h4>

<p>
These antibiotics prevent bacteria from forming a protective cell wall, leading to bacterial death.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Penicillins (e.g., Amoxicillin, Penicillin G)</li>
<li>Cephalosporins (e.g., Ceftriaxone, Cefuroxime)</li>
<li>Carbapenems (e.g., Meropenem)</li>
<li>Vancomycin</li>
</ul>



<h4 class="text-lg font-semibold mt-4 mb-2">
2. Protein Synthesis Inhibitors
</h4>

<p>
These drugs inhibit bacterial protein production by acting on ribosomes.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Tetracyclines (e.g., Doxycycline)</li>
<li>Macrolides (e.g., Azithromycin, Erythromycin)</li>
<li>Aminoglycosides (e.g., Gentamicin)</li>
<li>Chloramphenicol</li>
</ul>



<h4 class="text-lg font-semibold mt-4 mb-2">
3. DNA/RNA Synthesis Inhibitors
</h4>

<p>
These antibiotics interfere with bacterial genetic material replication.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Fluoroquinolones (e.g., Ciprofloxacin)</li>
<li>Rifampicin</li>
<li>Metronidazole</li>
</ul>



<h4 class="text-lg font-semibold mt-4 mb-2">
4. Cell Membrane Disruptors
</h4>

<p>
These drugs damage the bacterial cell membrane, causing leakage of cell contents.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Polymyxins (e.g., Colistin)</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Based on Spectrum of Activity
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Narrow-spectrum antibiotics – act on specific bacteria (e.g., Penicillin G)</li>
<li>Broad-spectrum antibiotics – act on a wide range of bacteria (e.g., Tetracycline, Amoxicillin)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Mechanism of Action of Antibiotics
</h2>

<p>
Antibiotics work through different mechanisms depending on their class:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Inhibition of cell wall synthesis → bacterial death</li>
<li>Inhibition of protein synthesis → stops bacterial growth</li>
<li>Inhibition of DNA replication → prevents bacterial multiplication</li>
<li>Disruption of cell membrane → leakage and death of bacteria</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Common Antibiotics and Their Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Amoxicillin – respiratory tract infections, ear infections</li>
<li>Ciprofloxacin – urinary tract infections</li>
<li>Azithromycin – respiratory infections and STIs</li>
<li>Metronidazole – anaerobic infections and protozoal infections</li>
<li>Gentamicin – severe systemic infections</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Side Effects of Antibiotics
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Allergic reactions (rash, anaphylaxis)</li>
<li>Gastrointestinal upset (nausea, diarrhea)</li>
<li>Ototoxicity (e.g., aminoglycosides)</li>
<li>Nephrotoxicity (kidney damage)</li>
<li>Disruption of normal gut flora</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Antibiotic Resistance
</h2>

<p>
Antibiotic resistance occurs when bacteria develop the ability to survive exposure to antibiotics
that would normally kill them or inhibit their growth.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Causes:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Overuse of antibiotics</li>
<li>Incomplete treatment courses</li>
<li>Self-medication</li>
<li>Misuse in viral infections</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Prevention:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Proper prescription use</li>
<li>Completing full treatment courses</li>
<li>Avoiding unnecessary antibiotic use</li>
<li>Infection control practices</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Administer antibiotics on time</li>
<li>Monitor for allergic reactions</li>
<li>Educate patients to complete doses</li>
<li>Check for drug interactions</li>
<li>Observe for side effects and report promptly</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Clinical Importance
</h2>

<p>
Antibiotics are essential in treating bacterial infections and preventing complications.
Proper use ensures effectiveness, while misuse can lead to resistance and treatment failure.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Summary
</h2>

<p>
Antibiotics are drugs used to treat bacterial infections by killing or inhibiting bacteria.
They are classified based on mechanism of action, spectrum, and chemical structure.
Safe and rational use is essential to prevent resistance and ensure effective treatment.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/iiiii" }
]
},

{
id: "analgesics",
title: "Analgesics and Anti-inflammatory Drugs",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Analgesics and Anti-inflammatory Drugs
</h1>

<p class="mb-8">
Analgesics and anti-inflammatory drugs are medications used to relieve pain and reduce inflammation.
They are widely used in clinical practice for conditions such as headache, musculoskeletal pain,
post-operative pain, arthritis, and fever-related discomfort.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Analgesics
</h2>

<p>
Analgesics are drugs that relieve pain without causing loss of consciousness.
They act on the central or peripheral nervous system to reduce pain perception.
</p>

<p>
They do not treat the cause of pain but help improve patient comfort and quality of life.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Classification of Analgesics
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Non-Opioid Analgesics
</h3>

<p>
These are mild to moderate pain relievers, often used for fever and inflammation.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Paracetamol (Acetaminophen) – pain and fever</li>
<li>Aspirin – pain, fever, and inflammation</li>
<li>Ibuprofen – pain, fever, and inflammation</li>
<li>Diclofenac – musculoskeletal pain</li>
</ul>

<p>
They are commonly used due to their safety profile at normal doses.
</p>




<h3 class="text-xl font-semibold mt-6 mb-3">
B. Opioid Analgesics
</h3>

<p>
These are strong pain relievers used for moderate to severe pain.
They act on the central nervous system.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Morphine – severe pain (e.g., cancer pain)</li>
<li>Codeine – mild to moderate pain and cough suppression</li>
<li>Tramadol – moderate pain relief</li>
<li>Fentanyl – very strong analgesic used in anesthesia</li>
</ul>

<p>
Opioids may cause dependence and require careful monitoring.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Non-Steroidal Anti-Inflammatory Drugs (NSAIDs)
</h2>

<p>
NSAIDs are drugs that reduce pain, inflammation, and fever by inhibiting prostaglandin production.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Ibuprofen</li>
<li>Aspirin</li>
<li>Diclofenac</li>
<li>Naproxen</li>
<li>Indomethacin</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Mechanism of Action:
</h3>

<p>
NSAIDs inhibit cyclooxygenase (COX-1 and COX-2) enzymes,
which reduces prostaglandin synthesis responsible for pain and inflammation.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Anti-inflammatory Drugs
</h2>

<p>
Anti-inflammatory drugs reduce swelling, redness, and tissue damage caused by inflammation.
They are commonly used in conditions like arthritis and injuries.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Types:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>NSAIDs – Ibuprofen, Diclofenac</li>
<li>Corticosteroids – Prednisolone, Dexamethasone</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Corticosteroids:
</h3>

<p>
These are powerful anti-inflammatory drugs that suppress immune response.
They are used in severe allergic reactions, asthma, and autoimmune diseases.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Mechanism of Pain Relief
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Blocking pain signals in the nervous system</li>
<li>Reducing prostaglandin production (NSAIDs)</li>
<li>Acting on opioid receptors in the brain (opioids)</li>
<li>Reducing inflammation at the site of injury</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Common Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Headache and migraine</li>
<li>Post-operative pain</li>
<li>Muscle and joint pain</li>
<li>Arthritis</li>
<li>Fever</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Side Effects
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
NSAIDs:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Gastric irritation and ulcers</li>
<li>Bleeding tendency</li>
<li>Kidney damage (long-term use)</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Opioids:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Respiratory depression</li>
<li>Drowsiness</li>
<li>Constipation</li>
<li>Dependence and addiction</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Assess pain level before and after administration</li>
<li>Monitor for side effects (especially respiratory depression in opioids)</li>
<li>Educate patients on proper use</li>
<li>Avoid overdose and drug interactions</li>
<li>Ensure correct dosage and timing</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<p>
Analgesics and anti-inflammatory drugs are essential in managing pain and improving patient comfort.
They are widely used across all healthcare settings, from minor pain management to severe chronic conditions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
Analgesics relieve pain while anti-inflammatory drugs reduce inflammation.
They include non-opioids, opioids, NSAIDs, and corticosteroids.
Proper use is essential to balance effectiveness and safety in patient care.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/jjjjj" }
]
},

{
id: "autonomic-drugs",
title: "Autonomic Nervous System Drugs",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Autonomic Nervous System (ANS) Drugs
</h1>

<p class="mb-8">
Autonomic Nervous System drugs are medications that act on the involuntary nervous system,
which controls functions such as heart rate, blood pressure, respiration, digestion, and glandular secretion.
These drugs are classified based on whether they stimulate or block sympathetic or parasympathetic activity.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Overview of the Autonomic Nervous System
</h2>

<p>
The autonomic nervous system is divided into two main parts:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Sympathetic Nervous System – “fight or flight” response</li>
<li>Parasympathetic Nervous System – “rest and digest” response</li>
</ul>

<p>
ANS drugs either stimulate or block these systems to produce therapeutic effects.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Classification of ANS Drugs
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Sympathomimetics (Adrenergic Agonists)
</h3>

<p>
These drugs stimulate the sympathetic nervous system by acting on adrenergic receptors.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Adrenaline (Epinephrine) – anaphylaxis, cardiac arrest</li>
<li>Noradrenaline – severe hypotension</li>
<li>Salbutamol – asthma (bronchodilation)</li>
<li>Dopamine – shock and heart failure</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Increased heart rate</li>
<li>Increased blood pressure</li>
<li>Bronchodilation</li>
<li>Increased blood glucose levels</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Sympatholytics (Adrenergic Blockers)
</h3>

<p>
These drugs block sympathetic nervous system activity.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Propranolol – hypertension, anxiety</li>
<li>Atenolol – hypertension, angina</li>
<li>Metoprolol – heart failure, hypertension</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Reduced heart rate</li>
<li>Lower blood pressure</li>
<li>Reduced cardiac workload</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Parasympathomimetics (Cholinergic Agonists)
</h3>

<p>
These drugs stimulate the parasympathetic nervous system.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Acetylcholine</li>
<li>Pilocarpine – glaucoma treatment</li>
<li>Neostigmine – myasthenia gravis</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Slowed heart rate</li>
<li>Increased salivation and digestion</li>
<li>Pupil constriction</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
D. Parasympatholytics (Anticholinergic Drugs)
</h3>

<p>
These drugs block parasympathetic activity by inhibiting acetylcholine.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Atropine – bradycardia, pre-anesthesia</li>
<li>Scopolamine – motion sickness</li>
<li>Ipratropium – asthma and COPD</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Increased heart rate</li>
<li>Dry mouth</li>
<li>Pupil dilation</li>
<li>Reduced secretions</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Mechanism of Action
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Sympathomimetics activate adrenergic receptors</li>
<li>Sympatholytics block adrenergic receptors</li>
<li>Parasympathomimetics stimulate muscarinic receptors</li>
<li>Parasympatholytics block acetylcholine action</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Clinical Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Asthma management (Salbutamol, Ipratropium)</li>
<li>Hypertension treatment (Beta-blockers)</li>
<li>Anaphylaxis emergency (Adrenaline)</li>
<li>Glaucoma treatment (Pilocarpine)</li>
<li>Heart rate control (Atropine, Beta-blockers)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Side Effects
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Sympathomimetics:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Tachycardia</li>
<li>Hypertension</li>
<li>Anxiety</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Beta-blockers:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Bradycardia</li>
<li>Fatigue</li>
<li>Hypotension</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Anticholinergics:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Dry mouth</li>
<li>Blurred vision</li>
<li>Urinary retention</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Monitor vital signs regularly</li>
<li>Assess patient response to therapy</li>
<li>Watch for adverse effects</li>
<li>Educate patients on drug use</li>
<li>Ensure correct dosage and timing</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Summary
</h2>

<p>
Autonomic nervous system drugs act on involuntary body functions by stimulating or blocking
sympathetic and parasympathetic activity. They are widely used in cardiovascular, respiratory,
and emergency medicine.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/kkkkk" }
]
},

{
id: "cardiovascular-drugs",
title: "Cardiovascular Drugs",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Cardiovascular Drugs
</h1>

<p class="mb-8">
Cardiovascular drugs are medications used to treat diseases of the heart and blood vessels.
They are commonly used in conditions such as hypertension, heart failure, angina, and arrhythmias.
These drugs help regulate blood pressure, improve heart function, and reduce cardiovascular risk.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Classification of Cardiovascular Drugs
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Antihypertensive Drugs
</h3>

<p>
Antihypertensives are drugs used to lower high blood pressure (hypertension).
They reduce the risk of stroke, heart attack, and kidney damage.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>ACE inhibitors – Enalapril, Lisinopril</li>
<li>Beta-blockers – Atenolol, Metoprolol</li>
<li>Calcium channel blockers – Amlodipine, Nifedipine</li>
<li>Diuretics – Hydrochlorothiazide</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Mechanism:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Relax blood vessels</li>
<li>Reduce cardiac output</li>
<li>Decrease blood volume (diuretics)</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Diuretics
</h3>

<p>
Diuretics are drugs that increase urine production to remove excess fluid and sodium from the body.
They are commonly used in hypertension and heart failure.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Furosemide (Loop diuretic)</li>
<li>Hydrochlorothiazide (Thiazide diuretic)</li>
<li>Spironolactone (Potassium-sparing diuretic)</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Reduces blood volume</li>
<li>Lowers blood pressure</li>
<li>Reduces edema (swelling)</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Antianginal Drugs
</h3>

<p>
Antianginal drugs are used to relieve chest pain (angina) caused by reduced blood flow to the heart.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Nitroglycerin</li>
<li>Isosorbide dinitrate</li>
<li>Beta-blockers (Atenolol)</li>
<li>Calcium channel blockers (Verapamil)</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Mechanism:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Increase oxygen supply to the heart</li>
<li>Reduce cardiac workload</li>
<li>Dilate coronary arteries</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
D. Cardiac Drugs (Heart Failure & Arrhythmias)
</h3>

<p>
These drugs are used to improve heart pumping function and control abnormal heart rhythms.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Digoxin – increases heart contraction strength</li>
<li>Amiodarone – antiarrhythmic drug</li>
<li>Lidocaine – ventricular arrhythmias</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Improves cardiac output</li>
<li>Controls irregular heartbeats</li>
<li>Enhances blood circulation</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Mechanism of Action
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Vasodilation – widens blood vessels to reduce pressure</li>
<li>Diuresis – removes excess fluid and sodium</li>
<li>Heart rate reduction – decreases workload on heart</li>
<li>Improved contractility – strengthens heart pumping</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Clinical Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Hypertension (high blood pressure)</li>
<li>Heart failure</li>
<li>Angina pectoris</li>
<li>Arrhythmias</li>
<li>Edema (fluid retention)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Side Effects
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Antihypertensives:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Hypotension</li>
<li>Dizziness</li>
<li>Fatigue</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Diuretics:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Dehydration</li>
<li>Electrolyte imbalance</li>
<li>Low potassium (hypokalemia)</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Cardiac drugs:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Arrhythmias</li>
<li>Nausea</li>
<li>Toxicity (especially digoxin)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Monitor blood pressure and heart rate</li>
<li>Check fluid balance and urine output</li>
<li>Observe for signs of toxicity</li>
<li>Educate patients on medication adherence</li>
<li>Ensure correct timing and dosage</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Summary
</h2>

<p>
Cardiovascular drugs are essential in managing heart and blood vessel disorders.
They include antihypertensives, diuretics, antianginal drugs, and cardiac medications.
They work by controlling blood pressure, improving heart function, and reducing fluid overload.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/lllll" }
]
},

{
id: "endocrine-drugs",
title: "Endocrine Drugs",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Endocrine Drugs
</h1>

<p class="mb-8">
Endocrine drugs are medications that act on hormone-producing glands or mimic the actions of natural hormones in the body.
They are commonly used in the treatment of diabetes mellitus, thyroid disorders, adrenal disorders, and reproductive hormone imbalances.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Overview of the Endocrine System
</h2>

<p>
The endocrine system consists of glands that produce hormones which regulate metabolism, growth, reproduction,
stress response, and homeostasis. Endocrine drugs either replace deficient hormones or block excessive hormone action.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Classification of Endocrine Drugs
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Antidiabetic Drugs
</h3>

<p>
These drugs are used to control blood glucose levels in diabetes mellitus.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Insulin – Type 1 diabetes and severe Type 2 diabetes</li>
<li>Metformin – first-line drug for Type 2 diabetes</li>
<li>Sulfonylureas – Glibenclamide, Glipizide</li>
<li>Glitazones – Pioglitazone</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Mechanism:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Increase insulin production (sulfonylureas)</li>
<li>Improve insulin sensitivity (metformin)</li>
<li>Replace insulin directly (insulin therapy)</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Thyroid Drugs
</h3>

<p>
These drugs are used to treat disorders of thyroid hormone imbalance.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Hypothyroidism Treatment:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Levothyroxine – replaces thyroid hormone</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Hyperthyroidism Treatment:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Carbimazole</li>
<li>Propylthiouracil (PTU)</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effects:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Regulate metabolism</li>
<li>Control energy levels</li>
<li>Balance body temperature and weight</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Adrenal Drugs (Corticosteroids)
</h3>

<p>
These drugs mimic or modify hormones produced by the adrenal cortex.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Prednisolone</li>
<li>Dexamethasone</li>
<li>Hydrocortisone</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Uses:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Severe inflammation</li>
<li>Allergic reactions</li>
<li>Autoimmune diseases</li>
<li>Asthma exacerbations</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
D. Sex Hormones
</h3>

<p>
These drugs regulate reproductive functions and secondary sexual characteristics.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Estrogen – reproductive health and hormone replacement</li>
<li>Progesterone – menstrual regulation and pregnancy support</li>
<li>Testosterone – male hormone replacement therapy</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Mechanism of Action
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Hormone replacement (e.g., insulin, levothyroxine)</li>
<li>Hormone stimulation (e.g., sulfonylureas increase insulin release)</li>
<li>Hormone inhibition (e.g., antithyroid drugs reduce thyroid hormone production)</li>
<li>Receptor modulation to regulate hormonal activity</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Clinical Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Diabetes mellitus management</li>
<li>Thyroid disorders (hypo and hyperthyroidism)</li>
<li>Adrenal insufficiency</li>
<li>Inflammatory and allergic conditions</li>
<li>Hormonal replacement therapy</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Side Effects
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Insulin:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Hypoglycemia</li>
<li>Weight gain</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Corticosteroids:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Weight gain</li>
<li>Increased blood sugar</li>
<li>Osteoporosis (long-term use)</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Antithyroid drugs:
</h3>
<ul class="list-disc pl-6 space-y-2">
<li>Liver toxicity</li>
<li>Low white blood cell count (rare)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Monitor blood glucose levels in diabetic patients</li>
<li>Observe for signs of hypo/hyperglycemia</li>
<li>Ensure correct timing of hormone administration</li>
<li>Educate patients on adherence and diet control</li>
<li>Monitor long-term steroid side effects</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Summary
</h2>

<p>
Endocrine drugs regulate hormonal balance in the body. They include antidiabetic drugs, thyroid medications,
corticosteroids, and sex hormones. They are essential in managing chronic metabolic and hormonal disorders.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/mmmmm" }
]
},

{
id: "chemotherapy",
title: "Chemotherapy and Anticancer Drugs",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Chemotherapy and Anticancer Drugs
</h1>

<p class="mb-8">
Chemotherapy refers to the use of chemical agents (anticancer drugs) to treat cancer by destroying cancer cells,
inhibiting their growth, or preventing their spread. These drugs act on rapidly dividing cells, which makes them effective
against cancer but also responsible for many side effects.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Chemotherapy
</h2>

<p>
Chemotherapy is the treatment of disease using chemical substances, especially drugs that target and kill cancer cells.
It is commonly used alone or in combination with surgery and radiotherapy for cancer management.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Classification of Anticancer Drugs
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Alkylating Agents
</h3>

<p>
These drugs damage DNA by adding alkyl groups, preventing cancer cell replication.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Cyclophosphamide</li>
<li>Ifosfamide</li>
<li>Chlorambucil</li>
<li>Cisplatin</li>
</ul>

<h4 class="text-lg font-semibold mt-4 mb-2">
Effect:
</h4>

<p>
They interfere with DNA replication leading to cancer cell death.
</p>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Antimetabolites
</h3>

<p>
These drugs interfere with DNA and RNA synthesis by mimicking normal cellular metabolites.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Methotrexate</li>
<li>5-Fluorouracil (5-FU)</li>
<li>Cytarabine</li>
<li>Mercaptopurine</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Plant-Derived (Natural) Drugs
</h3>

<p>
These drugs are derived from plants and inhibit cell division.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Vincristine</li>
<li>Vinblastine</li>
<li>Paclitaxel</li>
<li>Etoposide</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
D. Antibiotic Anticancer Drugs
</h3>

<p>
These are not antibiotics for infection but anticancer agents that damage DNA in cancer cells.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Doxorubicin</li>
<li>Bleomycin</li>
<li>Dactinomycin</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
E. Hormonal Agents
</h3>

<p>
These drugs act by blocking or modifying hormone activity in hormone-sensitive cancers.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Tamoxifen – breast cancer</li>
<li>Anastrozole – estrogen suppression</li>
<li>Flutamide – prostate cancer</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Mechanism of Action
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Damage to DNA (alkylating agents)</li>
<li>Inhibition of DNA/RNA synthesis (antimetabolites)</li>
<li>Inhibition of cell division (plant alkaloids)</li>
<li>Interference with hormone signaling (hormonal drugs)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Common Uses
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Leukemia</li>
<li>Breast cancer</li>
<li>Lung cancer</li>
<li>Prostate cancer</li>
<li>Lymphomas</li>
<li>Solid tumors</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Side Effects of Chemotherapy
</h2>

<p>
Because anticancer drugs target rapidly dividing cells, they also affect normal cells such as hair follicles, bone marrow, and digestive tract cells.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Hair loss (alopecia)</li>
<li>Nausea and vomiting</li>
<li>Bone marrow suppression (low blood cells)</li>
<li>Increased risk of infections</li>
<li>Fatigue and weakness</li>
<li>Mouth ulcers</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Monitor blood counts regularly</li>
<li>Prevent infection (aseptic technique)</li>
<li>Manage nausea and vomiting</li>
<li>Educate patient on side effects</li>
<li>Ensure safe handling of cytotoxic drugs</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Clinical Importance
</h2>

<p>
Chemotherapy is essential in cancer treatment. It helps reduce tumor size, control spread, and improve survival rates.
However, it requires careful monitoring due to its toxic effects on normal cells.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Summary
</h2>

<p>
Chemotherapy uses anticancer drugs to destroy or inhibit cancer cells.
They are classified into alkylating agents, antimetabolites, plant-derived drugs,
antibiotic anticancer drugs, and hormonal agents. Despite their effectiveness,
they have significant side effects and require careful clinical monitoring.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/nnnnn" }
]
},

{
id: "medication-safety",
title: "Medication Safety",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Medication Safety
</h1>

<p class="mb-8">
Medication safety refers to the practices and procedures used to ensure that drugs are administered correctly,
safely, and effectively to prevent harm to patients. It is a core responsibility in nursing and healthcare practice.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Medication Safety
</h2>

<p>
Medication safety involves all actions taken to prevent medication errors and ensure that patients receive
the right drug, in the right dose, through the right route, at the right time.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. The Rights of Drug Administration
</h2>

<p>
These are standard principles used to ensure safe medication administration.
</p>

<ul class="list-disc pl-6 space-y-2">
<li><strong>Right Patient</strong> – confirm the identity of the patient before giving medication</li>
<li><strong>Right Drug</strong> – ensure the correct medication is prescribed and selected</li>
<li><strong>Right Dose</strong> – verify the correct dosage using calculations</li>
<li><strong>Right Route</strong> – oral, IV, IM, SC, etc.</li>
<li><strong>Right Time</strong> – administer at the correct scheduled time</li>
<li><strong>Right Documentation</strong> – record all medications given accurately</li>
<li><strong>Right Reason</strong> – ensure the drug is appropriate for the condition</li>
<li><strong>Right Response</strong> – monitor patient response after administration</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Common Causes of Medication Errors
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Incorrect drug calculation</li>
<li>Misreading prescriptions</li>
<li>Confusion between similar drug names</li>
<li>Improper labeling of drugs</li>
<li>Fatigue and workload pressure</li>
<li>Communication errors between healthcare staff</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Types of Medication Errors
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Prescribing errors – wrong drug or dose prescribed</li>
<li>Dispensing errors – wrong drug given by pharmacy</li>
<li>Administration errors – wrong drug given to patient</li>
<li>Monitoring errors – failure to observe patient response</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Strategies for Preventing Medication Errors
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Always double-check drug calculations</li>
<li>Follow the “rights” of medication administration</li>
<li>Use clear and legible prescriptions</li>
<li>Confirm patient identity using two identifiers</li>
<li>Store medications properly and label clearly</li>
<li>Avoid distractions during medication preparation</li>
<li>Use electronic medication systems where available</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Safe Nursing Practice in Medication Administration
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Assess patient before giving medication</li>
<li>Check allergies and past drug reactions</li>
<li>Explain medication to the patient</li>
<li>Monitor for side effects and therapeutic effects</li>
<li>Document administration immediately</li>
<li>Report any adverse reactions promptly</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. High-Risk Medications
</h2>

<p>
Some drugs require extra caution due to their potential for serious harm if misused.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Insulin</li>
<li>Heparin (anticoagulant)</li>
<li>Opioids (e.g., morphine)</li>
<li>Potassium injections</li>
<li>Chemotherapy drugs</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Nursing Responsibilities
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Ensure accurate drug administration</li>
<li>Prevent and report medication errors</li>
<li>Educate patients on medication use</li>
<li>Monitor for therapeutic and adverse effects</li>
<li>Maintain accurate documentation</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<p>
Medication safety is essential in preventing harm, improving patient outcomes,
and ensuring trust in healthcare systems. It is a fundamental responsibility of all healthcare professionals.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
Medication safety focuses on preventing errors and ensuring correct drug administration.
The “rights” of medication administration and proper nursing practices are key to safe and effective patient care.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ooooo" }
]
}

]
},


anatomy: {
title: "Anatomy",
image: "/images/anatomy.jpg",
sections: [
{
id: "introduction",
title: "Introduction",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Introduction to Anatomy
</h1>

<p class="mb-8">
Anatomy is the branch of medical science that deals with the study of the structure of the human body
and the relationships between its various parts. It provides a foundation for understanding how the body
is organized and how different structures work together to maintain life.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Definition of Anatomy
</h2>

<p>
Anatomy is defined as the scientific study of the structure and organization of living organisms.
In humans, it focuses on the identification, location, and relationship of body parts ranging from
cells to entire organ systems.
</p>

<p>
Understanding anatomy is essential for healthcare professionals because structure determines function,
and any structural abnormality can lead to disease.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Branches of Anatomy
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Gross Anatomy
</h3>
<p>
Also known as macroscopic anatomy, it involves the study of structures visible to the naked eye,
such as organs, muscles, and bones.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Microscopic Anatomy
</h3>
<p>
This branch studies structures that require a microscope, including cells (cytology) and tissues (histology).
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Developmental Anatomy
</h3>
<p>
Focuses on the changes in body structure throughout the lifespan, including embryology
(the study of development before birth).
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Surface Anatomy
</h3>
<p>
Examines external features of the body and their relationship to internal structures,
important for clinical examinations.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Anatomical Position
</h2>

<p>
The anatomical position is the standard reference position used to describe the location of body parts.
In this position:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>The body stands upright</li>
<li>Face is directed forward</li>
<li>Arms are at the sides</li>
<li>Palms face forward</li>
<li>Feet are slightly apart</li>
</ul>

<p>
All anatomical descriptions are based on this position to ensure consistency.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Anatomical Terminology
</h2>

<p>
Standard anatomical terms are used to describe the location and relationship of body structures.
</p>

<ul class="list-disc pl-6 space-y-2">
<li><strong>Superior</strong> – toward the head</li>
<li><strong>Inferior</strong> – toward the feet</li>
<li><strong>Anterior</strong> – front of the body</li>
<li><strong>Posterior</strong> – back of the body</li>
<li><strong>Medial</strong> – toward the midline</li>
<li><strong>Lateral</strong> – away from the midline</li>
<li><strong>Proximal</strong> – closer to the point of origin</li>
<li><strong>Distal</strong> – farther from the point of origin</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Importance of Anatomy in Healthcare
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Provides the foundation for understanding physiology and pathology</li>
<li>Helps in accurate diagnosis and treatment</li>
<li>Guides surgical procedures and clinical interventions</li>
<li>Essential for safe nursing and medical practice</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Summary
</h2>

<p>
Anatomy is the study of the structure of the human body and its parts.
It includes different branches such as gross and microscopic anatomy,
and uses standardized positions and terms to describe body structures.
A strong understanding of anatomy is essential for all healthcare professionals.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
{ type: "image", src: "/images/anatomy.jpg" },

  { type: "image", src: "/images/human-body.jpg" },

  { type: "image", src: "/images/anatomical-position.jpg" },

  { type: "image", src: "/images/body-regions.jpg" },


  { type: "image", src: "/images/body-cavites.jpg" },

  { type: "image", src: "/images/levels-of-organization.jpg" },

  { type: "image", src: "/images/major-body-systems.png" },

  { type: "image", src: "/images/basic-tissues.jpg" },

  { type: "image", src: "/images/organ-review.jfif" }
]
},
{
id: "Levels of Body Organization",
title: "Levels of Body Organization",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Levels of Body Organization
</h1>

<p class="mb-8">
The human body is organized in a hierarchical manner, beginning from the simplest chemical components
to the complete organism. Each level builds upon the one below it, and all levels work together
to maintain structure, function, and survival.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Chemical Level
</h2>

<p>
The chemical level is the most basic level of organization and includes atoms and molecules
that form the building blocks of life.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples of Atoms:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Oxygen (O)</li>
<li>Carbon (C)</li>
<li>Hydrogen (H)</li>
<li>Nitrogen (N)</li>
<li>Calcium (Ca)</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples of Molecules:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Water (H₂O)</li>
<li>Glucose</li>
<li>Proteins</li>
<li>Lipids</li>
<li>DNA</li>
</ul>

<p>
These chemical substances combine to form cellular structures.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Cellular Level
</h2>

<p>
Cells are the basic structural and functional units of life.
They carry out processes such as metabolism, growth, and reproduction.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Nerve cells (neurons)</li>
<li>Muscle cells</li>
<li>Red blood cells</li>
<li>Epithelial cells</li>
</ul>

<p>
Groups of similar cells form tissues.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Tissue Level
</h2>

<p>
A tissue is a group of similar cells working together to perform a common function.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Major Tissue Types:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Epithelial tissue – covers surfaces and lines cavities</li>
<li>Connective tissue – supports and binds structures</li>
<li>Muscle tissue – enables movement</li>
<li>Nervous tissue – conducts impulses</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Organ Level
</h2>

<p>
An organ is a structure composed of two or more tissue types working together for a specific function.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Heart</li>
<li>Lungs</li>
<li>Liver</li>
<li>Kidneys</li>
<li>Stomach</li>
</ul>

<p>
Organs combine to form organ systems.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Organ System Level
</h2>

<p>
An organ system consists of multiple organs working together to perform major body functions.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Digestive system</li>
<li>Respiratory system</li>
<li>Cardiovascular system</li>
<li>Nervous system</li>
<li>Urinary system</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Organism Level
</h2>

<p>
The organism level represents the complete living human being,
where all body systems work together to sustain life.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Importance of Levels of Organization
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Helps explain how the body is structured</li>
<li>Shows how simple components form complex systems</li>
<li>Provides foundation for anatomy and physiology</li>
<li>Helps understand disease effects at different levels</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Summary
</h2>

<p>
The human body is organized into six levels:
chemical, cellular, tissue, organ, organ system, and organism.
Each level depends on the others to maintain normal body function.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "Body Cavities",
title: "Body Cavities and Membrane",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Body Cavities and Membranes
</h1>

<p class="mb-8">
Body cavities are spaces within the body that contain, protect, and support internal organs.
These cavities help reduce friction, allow organ movement, and provide structural organization.
Body membranes line these cavities, cover organs, and contribute to protection and function.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of Body Cavities
</h2>

<p>
A body cavity is a space or compartment in the body that houses internal organs.
These spaces protect delicate organs and allow them to function properly.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Major Body Cavities
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Dorsal Body Cavity
</h3>

<p>
The dorsal cavity is located at the back (posterior) of the body and protects the central nervous system.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Divisions:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Cranial cavity – contains the brain</li>
<li>Vertebral (spinal) cavity – contains the spinal cord</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Ventral Body Cavity
</h3>

<p>
The ventral cavity is located at the front (anterior) of the body and contains major internal organs.
It is divided by the diaphragm.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Divisions:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Thoracic cavity</li>
<li>Abdominopelvic cavity</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Thoracic Cavity
</h2>

<p>
The thoracic cavity is the chest cavity above the diaphragm.
It contains organs involved in circulation and respiration.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Contents:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Heart</li>
<li>Lungs</li>
<li>Trachea</li>
<li>Esophagus</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Subdivisions:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Right pleural cavity – surrounds right lung</li>
<li>Left pleural cavity – surrounds left lung</li>
<li>Mediastinum – central region containing the heart</li>
<li>Pericardial cavity – surrounds the heart</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Abdominopelvic Cavity
</h2>

<p>
The abdominopelvic cavity lies below the diaphragm and is divided into abdominal and pelvic cavities.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Abdominal Cavity Contains:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Stomach</li>
<li>Liver</li>
<li>Pancreas</li>
<li>Intestines</li>
<li>Spleen</li>
<li>Kidneys</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Pelvic Cavity Contains:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Urinary bladder</li>
<li>Rectum</li>
<li>Reproductive organs</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Body Membranes
</h2>

<p>
Membranes are thin layers of tissue that cover surfaces, line cavities, and protect organs.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Serous Membranes
</h3>

<p>
Serous membranes line closed body cavities and reduce friction between organs.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Pleura – membrane around lungs</li>
<li>Pericardium – membrane around heart</li>
<li>Peritoneum – membrane lining abdominal organs</li>
</ul>

<p>
Each has:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Parietal layer – lines cavity wall</li>
<li>Visceral layer – covers organ surface</li>
<li>Serous fluid – lubricates between layers</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Mucous Membranes
</h3>

<p>
Line body passages that open to the outside.
</p>

Examples:
<ul class="list-disc pl-6 space-y-2">
<li>Respiratory tract</li>
<li>Digestive tract</li>
<li>Urinary tract</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Synovial Membranes
</h3>

<p>
Line movable joints and produce synovial fluid for lubrication.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Functions of Body Cavities and Membranes
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Protect internal organs</li>
<li>Reduce friction during organ movement</li>
<li>Support organ positioning</li>
<li>Allow organs to expand and function normally</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Pleuritis affects pleural membranes</li>
<li>Pericarditis affects pericardium</li>
<li>Peritonitis affects abdominal membrane</li>
<li>Fluid accumulation in cavities may impair organ function</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Summary
</h2>

<p>
Body cavities are spaces that protect and house organs, while membranes line these cavities
and reduce friction. Major cavities include dorsal and ventral cavities, while major membranes
include pleura, pericardium, and peritoneum.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "skeletal-system",
title: "Skeletal System",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Skeletal System
</h1>

<p class="mb-8">
The skeletal system is the framework of the human body composed of bones, cartilage, ligaments,
and joints. It supports the body, protects vital organs, enables movement, stores minerals,
and produces blood cells.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of the Skeletal System
</h2>

<p>
The skeletal system consists of all bones and supporting connective tissues that form the structural
framework of the body.
</p>

<p>
An adult human has approximately 206 bones, while infants have more bones that fuse during growth.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Functions of the Skeletal System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Support – provides body framework and posture</li>
<li>Protection – shields organs from injury</li>
<li>Movement – works with muscles to produce motion</li>
<li>Mineral storage – stores calcium and phosphorus</li>
<li>Blood cell production – occurs in bone marrow</li>
<li>Fat storage – yellow marrow stores lipids</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Divisions of the Skeleton
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Axial Skeleton
</h3>

<p>
The axial skeleton forms the central axis of the body.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Includes:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Skull</li>
<li>Vertebral column</li>
<li>Ribs</li>
<li>Sternum</li>
<li>Hyoid bone</li>
</ul>

<p>
Main function: support and protection of vital organs such as the brain, spinal cord, and heart.
</p>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Appendicular Skeleton
</h3>

<p>
The appendicular skeleton consists of limbs and girdles attached to the axial skeleton.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Includes:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Upper limbs</li>
<li>Lower limbs</li>
<li>Pectoral (shoulder) girdle</li>
<li>Pelvic girdle</li>
</ul>

<p>
Main function: movement and locomotion.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Types of Bones
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Long bones – femur, humerus</li>
<li>Short bones – carpals, tarsals</li>
<li>Flat bones – ribs, skull bones, sternum</li>
<li>Irregular bones – vertebrae</li>
<li>Sesamoid bones – patella</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Structure of a Long Bone
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Parts:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Diaphysis – shaft of bone</li>
<li>Epiphysis – ends of bone</li>
<li>Periosteum – outer covering</li>
<li>Compact bone – dense outer layer</li>
<li>Spongy bone – porous inner layer</li>
<li>Bone marrow – red and yellow marrow</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Joints
</h2>

<p>
Joints are places where two or more bones meet.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Types:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Fibrous joints – little or no movement</li>
<li>Cartilaginous joints – slight movement</li>
<li>Synovial joints – freely movable joints</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Examples of Synovial Joints:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Shoulder (ball-and-socket)</li>
<li>Hip (ball-and-socket)</li>
<li>Knee (hinge)</li>
<li>Elbow (hinge)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Bone Growth and Remodeling
</h2>

<p>
Bones are living tissues that grow, repair, and remodel throughout life.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Osteoblasts build bone</li>
<li>Osteoclasts break down bone</li>
<li>Calcium and vitamin D support bone health</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Common Disorders of the Skeletal System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Fractures</li>
<li>Osteoporosis</li>
<li>Arthritis</li>
<li>Scoliosis</li>
<li>Rickets</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Essential in mobility and posture</li>
<li>Important in trauma care</li>
<li>Provides foundation for musculoskeletal assessment</li>
<li>Supports understanding of orthopedic disorders</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
The skeletal system provides support, protection, movement, mineral storage, and blood formation.
It consists of axial and appendicular divisions, different bone types, and various joints that allow function.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "muscular-system",
title: "Muscular System",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Muscular System
</h1>

<p class="mb-8">
The muscular system consists of specialized tissues called muscles that produce movement,
maintain posture, stabilize joints, and generate heat. Muscles work closely with the skeletal
system to enable body movement and support many vital functions.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of the Muscular System
</h2>

<p>
The muscular system is the body system made up of muscles and associated structures responsible
for movement and other important body functions.
</p>

<p>
The human body contains more than 600 muscles.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Functions of Muscles
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Produces movement</li>
<li>Maintains posture</li>
<li>Stabilizes joints</li>
<li>Generates body heat</li>
<li>Supports breathing and circulation</li>
<li>Protects some internal organs</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Types of Muscle Tissue
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Skeletal Muscle
</h3>

<p>
Skeletal muscle is attached to bones and produces voluntary movement.
It is striated in appearance.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Examples:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Biceps</li>
<li>Triceps</li>
<li>Quadriceps</li>
<li>Deltoid</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Smooth Muscle
</h3>

<p>
Smooth muscle is found in walls of hollow organs and works involuntarily.
It is non-striated.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Found In:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Intestines</li>
<li>Blood vessels</li>
<li>Urinary bladder</li>
<li>Uterus</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Cardiac Muscle
</h3>

<p>
Cardiac muscle is found only in the heart.
It is involuntary, striated, and specialized for continuous contraction.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Structure of Skeletal Muscle
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Muscle fibers – muscle cells</li>
<li>Fascicles – bundles of fibers</li>
<li>Tendons – connect muscle to bone</li>
<li>Myofibrils – contain contractile units</li>
<li>Sarcomeres – basic unit of contraction</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Muscle Contraction
</h2>

<p>
Muscle contraction occurs when muscle fibers shorten to produce force and movement.
This occurs through interaction of actin and myosin filaments.
</p>

<p>
Contraction requires:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Nerve stimulation</li>
<li>Calcium</li>
<li>ATP (energy)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Types of Muscle Action
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Flexion – decreases angle at a joint</li>
<li>Extension – increases angle</li>
<li>Abduction – movement away from midline</li>
<li>Adduction – movement toward midline</li>
<li>Rotation – turning movement</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Major Muscle Groups
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Pectoral muscles</li>
<li>Abdominal muscles</li>
<li>Back muscles</li>
<li>Arm muscles</li>
<li>Thigh muscles</li>
<li>Calf muscles</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Common Disorders of the Muscular System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Muscle strain</li>
<li>Cramps</li>
<li>Muscular dystrophy</li>
<li>Myasthenia gravis</li>
<li>Paralysis</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Important for movement and mobility</li>
<li>Essential in musculoskeletal assessment</li>
<li>Helps understand neuromuscular disorders</li>
<li>Important in rehabilitation and patient care</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
The muscular system consists of skeletal, smooth, and cardiac muscles.
It enables movement, posture, heat production, and vital body functions through muscle contraction.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "nervous-system",
title: "Nervous System",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Nervous System
</h1>

<p class="mb-8">
The nervous system is the control and communication system of the body.
It receives information, processes stimuli, coordinates responses,
and regulates body activities. It plays a major role in sensation,
movement, thought, memory, and maintenance of homeostasis.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of the Nervous System
</h2>

<p>
The nervous system is a network of specialized cells, tissues, and organs
that transmit signals throughout the body to control and coordinate functions.
</p>

<p>
Its basic functional unit is the neuron.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Functions of the Nervous System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Sensory function – receives stimuli</li>
<li>Integrative function – processes information</li>
<li>Motor function – initiates responses</li>
<li>Coordinates body systems</li>
<li>Maintains homeostasis</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Divisions of the Nervous System
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Central Nervous System (CNS)
</h3>

<p>
The central nervous system consists of the brain and spinal cord.
It serves as the main control center of the body.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Components:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Brain</li>
<li>Spinal cord</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Peripheral Nervous System (PNS)
</h3>

<p>
The peripheral nervous system consists of nerves outside the brain and spinal cord.
It links the CNS with the rest of the body.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Cranial nerves</li>
<li>Spinal nerves</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Functional Divisions of the PNS
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
Somatic Nervous System
</h3>

<p>
Controls voluntary activities such as movement of skeletal muscles.
</p>



<h3 class="text-xl font-semibold mt-10 mb-3">
Autonomic Nervous System
</h3>

<p>
Controls involuntary functions.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Divisions:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Sympathetic division – “fight or flight”</li>
<li>Parasympathetic division – “rest and digest”</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. The Brain
</h2>

<p>
The brain is the major control organ of the nervous system.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Major Parts:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Cerebrum – thought, memory, voluntary activity</li>
<li>Cerebellum – balance and coordination</li>
<li>Brainstem – vital functions like breathing and heart rate</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Spinal Cord
</h2>

<p>
The spinal cord carries impulses between the brain and body
and also serves as a center for reflex actions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Neurons
</h2>

<p>
Neurons are specialized nerve cells that transmit impulses.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Parts of a Neuron:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Dendrites</li>
<li>Cell body</li>
<li>Axon</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Types of Neurons:
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Sensory neurons</li>
<li>Motor neurons</li>
<li>Interneurons</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Reflex Action
</h2>

<p>
A reflex is a rapid automatic response to a stimulus without conscious control.
</p>

Example:
<ul class="list-disc pl-6 space-y-2">
<li>Withdrawal from pain</li>
<li>Knee jerk reflex</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Protection of the Nervous System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Skull protects the brain</li>
<li>Vertebral column protects spinal cord</li>
<li>Meninges cover CNS structures</li>
<li>Cerebrospinal fluid cushions the brain and spinal cord</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Common Disorders
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Stroke</li>
<li>Meningitis</li>
<li>Epilepsy</li>
<li>Parkinson’s disease</li>
<li>Spinal cord injury</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Essential in neurological assessment</li>
<li>Important for understanding reflexes and sensation</li>
<li>Forms basis for neuro disorders and patient care</li>
<li>Helps explain body control and coordination</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
12. Summary
</h2>

<p>
The nervous system controls and coordinates body activities.
It includes the CNS and PNS, neurons, reflexes,
and mechanisms that maintain communication and homeostasis.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "cardiovascular-system",
title: "Cardiovascular System",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Cardiovascular System
</h1>

<p class="mb-8">
The cardiovascular system, also called the circulatory system,
is responsible for transporting blood, oxygen, nutrients, hormones,
and waste products throughout the body. It consists primarily of the heart,
blood vessels, and blood.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of the Cardiovascular System
</h2>

<p>
The cardiovascular system is a transport system that maintains circulation
and supports the function of all body tissues.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Components of the Cardiovascular System
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Heart
</h3>

<p>
The heart is a muscular organ that pumps blood throughout the body.
It is located in the thoracic cavity within the mediastinum.
</p>

<h4 class="text-lg font-semibold mt-4 mb-2">
Functions:
</h4>

<ul class="list-disc pl-6 space-y-2">
<li>Pumps oxygenated blood to tissues</li>
<li>Pumps deoxygenated blood to lungs</li>
<li>Maintains blood pressure</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Blood Vessels
</h3>

<p>
Blood vessels transport blood throughout the body.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Arteries – carry blood away from the heart</li>
<li>Veins – carry blood toward the heart</li>
<li>Capillaries – allow exchange of substances</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
C. Blood
</h3>

<p>
Blood is a fluid connective tissue involved in transport, protection, and regulation.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Red blood cells</li>
<li>White blood cells</li>
<li>Platelets</li>
<li>Plasma</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Structure of the Heart
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Four Chambers
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Right atrium</li>
<li>Right ventricle</li>
<li>Left atrium</li>
<li>Left ventricle</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">
Heart Valves
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Tricuspid valve</li>
<li>Mitral valve</li>
<li>Pulmonary valve</li>
<li>Aortic valve</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Circulation Pathways
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Pulmonary Circulation
</h3>

<p>
Carries deoxygenated blood from heart to lungs and returns oxygenated blood to heart.
</p>



<h3 class="text-xl font-semibold mt-10 mb-3">
Systemic Circulation
</h3>

<p>
Carries oxygenated blood from heart to body tissues and returns deoxygenated blood.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Cardiac Cycle
</h2>

<p>
The cardiac cycle refers to events during one heartbeat.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Systole – contraction phase</li>
<li>Diastole – relaxation phase</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Blood Pressure
</h2>

<p>
Blood pressure is the force exerted by blood against vessel walls.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Systolic pressure</li>
<li>Diastolic pressure</li>
</ul>

<p>
Normal adult blood pressure is often around 120/80 mmHg.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Functions of the Cardiovascular System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Transport oxygen and nutrients</li>
<li>Remove waste products</li>
<li>Carry hormones</li>
<li>Help regulate temperature</li>
<li>Support immunity</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Common Disorders
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Hypertension</li>
<li>Heart failure</li>
<li>Coronary artery disease</li>
<li>Arrhythmias</li>
<li>Stroke</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Essential in vital signs assessment</li>
<li>Important for understanding circulation</li>
<li>Foundation for cardiac disease management</li>
<li>Critical in emergency and nursing care</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
The cardiovascular system consists of the heart, blood vessels, and blood.
It transports materials throughout the body through pulmonary and systemic circulation
and is essential for survival.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "respiratory-system",
title: "Respiratory System",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Respiratory System
</h1>

<p class="mb-8">
The respiratory system is responsible for breathing and gas exchange.
It supplies oxygen to the body and removes carbon dioxide, which is a waste product of metabolism.
This process is essential for cellular respiration and survival.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of the Respiratory System
</h2>

<p>
The respiratory system is a group of organs that work together to allow air movement in and out of the lungs
and facilitate exchange of gases between air and blood.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Functions of the Respiratory System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Provides oxygen to the body</li>
<li>Removes carbon dioxide</li>
<li>Maintains acid-base balance (pH)</li>
<li>Enables speech production</li>
<li>Assists in smell (olfaction)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Parts of the Respiratory System
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
Upper Respiratory Tract
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Nose and nasal cavity</li>
<li>Pharynx (throat)</li>
<li>Larynx (voice box)</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
Lower Respiratory Tract
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Trachea (windpipe)</li>
<li>Bronchi</li>
<li>Bronchioles</li>
<li>Lungs</li>
<li>Alveoli</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Structure of the Lungs
</h2>

<p>
The lungs are paired spongy organs located in the thoracic cavity.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Right lung – 3 lobes</li>
<li>Left lung – 2 lobes</li>
<li>Covered by pleura (serous membrane)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Mechanism of Breathing
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
Inspiration (Inhalation)
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Diaphragm contracts and flattens</li>
<li>Chest cavity expands</li>
<li>Air enters lungs</li>
</ul>



<h3 class="text-xl font-semibold mt-10 mb-3">
Expiration (Exhalation)
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Diaphragm relaxes and moves upward</li>
<li>Chest cavity decreases in size</li>
<li>Air leaves lungs</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Gas Exchange (Respiration)
</h2>

<p>
Gas exchange occurs in the alveoli where oxygen diffuses into blood and carbon dioxide diffuses out.
</p>

<p>
This process depends on concentration gradients and thin alveolar walls.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Transport of Gases
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Oxygen is carried by hemoglobin in red blood cells</li>
<li>Carbon dioxide is transported in plasma and red blood cells</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Regulation of Breathing
</h2>

<p>
Breathing is controlled by the respiratory center in the brainstem,
which responds to carbon dioxide levels in the blood.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Common Disorders
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Asthma</li>
<li>Bronchitis</li>
<li>Pneumonia</li>
<li>Tuberculosis</li>
<li>Chronic obstructive pulmonary disease (COPD)</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Essential for oxygen supply to tissues</li>
<li>Important in emergency care (respiratory distress)</li>
<li>Used in monitoring vital signs (respiratory rate)</li>
<li>Key system in critical care and nursing assessment</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Summary
</h2>

<p>
The respiratory system enables breathing and gas exchange.
It includes the upper and lower respiratory tracts, lungs, and alveoli,
and works closely with the cardiovascular system to sustain life.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "digestive-system",
title: "Digestive System",
content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Digestive System
</h1>

<p class="mb-8">
The digestive system is responsible for breaking down food into simpler substances that can be absorbed
and used by the body for energy, growth, and repair. It also eliminates undigested waste materials.
</p>



<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Meaning of the Digestive System
</h2>

<p>
The digestive system is a group of organs that work together to digest food, absorb nutrients,
and remove waste products from the body.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Functions of the Digestive System
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Ingestion – taking in food</li>
<li>Digestion – breaking food into smaller molecules</li>
<li>Absorption – taking nutrients into the blood</li>
<li>Assimilation – using nutrients in cells</li>
<li>Elimination – removal of waste</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Parts of the Digestive System
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Alimentary Canal (Gastrointestinal Tract)
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Mouth</li>
<li>Pharynx</li>
<li>Esophagus</li>
<li>Stomach</li>
<li>Small intestine</li>
<li>Large intestine</li>
<li>Rectum</li>
<li>Anus</li>
</ul>




<h3 class="text-xl font-semibold mt-10 mb-3">
B. Accessory Organs
</h3>

<ul class="list-disc pl-6 space-y-2">
<li>Salivary glands</li>
<li>Liver</li>
<li>Gallbladder</li>
<li>Pancreas</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Process of Digestion
</h2>



<h3 class="text-xl font-semibold mt-6 mb-3">
A. Ingestion and Mastication
</h3>

<p>
Food enters the mouth where it is chewed and mixed with saliva to form a bolus.
</p>



<h3 class="text-xl font-semibold mt-10 mb-3">
B. Digestion in the Stomach
</h3>

<p>
Food is mixed with gastric juice containing acid and enzymes, breaking it down into chyme.
</p>



<h3 class="text-xl font-semibold mt-10 mb-3">
C. Digestion in the Small Intestine
</h3>

<p>
Most chemical digestion and absorption occur here with the help of bile, pancreatic enzymes,
and intestinal enzymes.
</p>



<h3 class="text-xl font-semibold mt-10 mb-3">
D. Absorption
</h3>

<p>
Nutrients are absorbed through villi in the small intestine into the bloodstream.
</p>



<h3 class="text-xl font-semibold mt-10 mb-3">
E. Elimination
</h3>

<p>
Undigested food passes into the large intestine and is eliminated as feces.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Digestive Enzymes and Secretions
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Salivary amylase – breaks down carbohydrates</li>
<li>Pepsin – breaks down proteins in stomach</li>
<li>Lipase – breaks down fats</li>
<li>Bile – emulsifies fats (produced by liver)</li>
<li>Pancreatic enzymes – digest carbohydrates, proteins, and fats</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Structure of the Small Intestine
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Duodenum – first part, major digestion site</li>
<li>Jejunum – main absorption site</li>
<li>Ileum – final absorption section</li>
<li>Villi and microvilli increase surface area</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Functions of Accessory Organs
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Liver – produces bile, processes nutrients</li>
<li>Gallbladder – stores bile</li>
<li>Pancreas – secretes digestive enzymes and hormones</li>
<li>Salivary glands – produce saliva for digestion</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Common Disorders
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Peptic ulcer disease</li>
<li>Gastroenteritis</li>
<li>Appendicitis</li>
<li>Constipation</li>
<li>Diarrhea</li>
<li>Hepatitis</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance
</h2>

<ul class="list-disc pl-6 space-y-2">
<li>Essential for nutrition and energy supply</li>
<li>Important in drug absorption and metabolism</li>
<li>Key system in nursing assessment (nutrition status)</li>
<li>Important in fluid and electrolyte balance</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Summary
</h2>

<p>
The digestive system breaks down food, absorbs nutrients, and removes waste.
It consists of the gastrointestinal tract and accessory organs that work together to maintain nutrition and body function.
</p>

</div>
`,

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "urinary-system",
title: "Urinary System",
content: "The human body is organized into major systems...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "endocrine-system",
title: "Endocrine System",
content: "The human body is organized into major systems...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "reproductive-system",
title: "Reproductive System",
content: "The human body is organized into major systems...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "integumentary-system",
title: "Integumentary System",
content: "The human body is organized into major systems...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "lymphatic-system",
title: "Lymphatic System",
content: "The human body is organized into major systems...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
{
id: "special-senses",
title: "Special Senses",
content: "The human body is organized into major systems...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ddddd" }
]
},
]
},



gynecology: {
title: "Gynecology",
image: "/images/gynecology.jpg",
sections: [

    {
      id: "introduction-to-gynecology",
      title: "Introduction to Gynecology",
      content: "Overview of gynecology, scope, and importance.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "female-reproductive-system",
      title: "Female Reproductive System",
      content: "Anatomy and physiology of the female reproductive organs.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "puberty-and-adolescence",
      title: "Puberty and Adolescent Gynecology",
      content: "Changes during puberty and adolescent reproductive health.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]   
    },

    {
      id: "menstrual-cycle",
      title: "Menstrual Cycle",
      content: "Hormonal regulation and phases of the menstrual cycle.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "menstrual-disorders",
      title: "Menstrual Disorders",
      content: "Amenorrhea, dysmenorrhea, menorrhagia, and irregular menstruation.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "ovulation-and-fertility",
      title: "Ovulation and Fertility",
      content: "Ovulation process and fertility awareness.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "infertility",
      title: "Infertility",
      content: "Causes, diagnosis, and management of infertility.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "contraception-and-family-planning",
      title: "Contraception and Family Planning",
      content: "Methods of contraception and reproductive planning.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "sexually-transmitted-infections",
      title: "Sexually Transmitted Infections",
      content: "STIs affecting the reproductive system.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pelvic-inflammatory-disease",
      title: "Pelvic Inflammatory Disease",
      content: "Infections of the female reproductive tract.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "vaginal-disorders",
      title: "Vaginal Disorders",
      content: "Vaginitis, candidiasis, bacterial vaginosis, and related conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "cervical-disorders",
      title: "Cervical Disorders",
      content: "Cervicitis, cervical dysplasia, and cervical cancer.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "uterine-disorders",
      title: "Uterine Disorders",
      content: "Fibroids, endometritis, adenomyosis, and related conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "endometriosis",
      title: "Endometriosis",
      content: "Causes, symptoms, and treatment of endometriosis.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "ovarian-disorders",
      title: "Ovarian Disorders",
      content: "Ovarian cysts, tumors, and ovarian dysfunction.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "polycystic-ovarian-syndrome",
      title: "Polycystic Ovarian Syndrome (PCOS)",
      content: "Hormonal disorder affecting ovulation and fertility.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "benign-breast-disorders",
      title: "Benign Breast Disorders",
      content: "Fibroadenoma, mastitis, and breast cysts.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "breast-cancer",
      title: "Breast Cancer",
      content: "Risk factors, diagnosis, and treatment of breast cancer.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "gynecological-cancers",
      title: "Gynecological Cancers",
      content: "Cancers affecting reproductive organs.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pelvic-floor-disorders",
      title: "Pelvic Floor Disorders",
      content: "Pelvic organ prolapse and urinary incontinence.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "menopause",
      title: "Menopause",
      content: "Physiological changes and management during menopause.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "gynecological-procedures",
      title: "Gynecological Procedures",
      content: "Pap smear, D&C, hysteroscopy, laparoscopy, and biopsy.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "gynecological-surgeries",
      title: "Gynecological Surgeries",
      content: "Hysterectomy and other surgical interventions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "obstetric-emergencies",
      title: "Obstetric and Gynecological Emergencies",
      content: "Emergency conditions related to reproductive health.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "reproductive-health-education",
      title: "Reproductive Health Education",
      content: "Health promotion and patient education.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "ethical-and-legal-issues",
      title: "Ethical and Legal Issues in Gynecology",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    }

  ]
},
obstetrics: {
title: "Obstetrics",
image: "/images/gynecology.jpg",
sections: [

    {
      id: "introduction-to-obstetrics",
      title: "Introduction to Obstetrics",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pregnancy",
      title: "Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "antenatal-care",
      title: "Antenatal Care",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "fetal-development",
      title: "Fetal Development",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "physiology-of-pregnancy",
      title: "Physiology of Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "nutrition-in-pregnancy",
      title: "Nutrition in Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "minor-disorders-of-pregnancy",
      title: "Minor Disorders of Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "high-risk-pregnancy",
      title: "High-Risk Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pregnancy-induced-hypertension",
      title: "Pregnancy Induced Hypertension",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "gestational-diabetes",
      title: "Gestational Diabetes",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "antepartum-hemorrhage",
      title: "Antepartum Hemorrhage",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "labor-and-delivery",
      title: "Labor and Delivery",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "stages-of-labor",
      title: "Stages of Labor",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "normal-delivery",
      title: "Normal Vaginal Delivery",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "assisted-delivery",
      title: "Assisted Delivery",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "cesarean-section",
      title: "Cesarean Section",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "postpartum-care",
      title: "Postpartum Care",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "puerperium",
      title: "Puerperium",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "breastfeeding",
      title: "Breastfeeding",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "postpartum-complications",
      title: "Postpartum Complications",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "abortion",
      title: "Abortion",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "ectopic-pregnancy",
      title: "Ectopic Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "multiple-pregnancy",
      title: "Multiple Pregnancy",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "obstetric-emergencies",
      title: "Obstetric Emergencies",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "newborn-care",
      title: "Newborn Care",
      content: "Ethical principles and legal considerations.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    }

  ]
},
pediatrics: {
title: "Pediatrics",
image: "/images/pediatrics.jpg",
sections: [

    {
      id: "introduction-to-pediatrics",
      title: "Introduction to Pediatrics",
      content: "Overview of pediatric nursing and child healthcare.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "growth-and-development",
      title: "Growth and Development",
      content: "Physical, cognitive, emotional, and social development of children.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "newborn-care",
      title: "Newborn Care",
      content: "Assessment and care of the newborn infant.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "neonatal-resuscitation",
      title: "Neonatal Resuscitation",
      content: "Emergency management of newborns after birth.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "breastfeeding-and-infant-nutrition",
      title: "Breastfeeding and Infant Nutrition",

      content: "Nutrition requirements for infants and young children.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "immunization",
      title: "Immunization",
      content: "Vaccines and childhood immunization schedules.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "common-childhood-illnesses",
      title: "Common Childhood Illnesses",
      content: "Frequently occurring diseases in children.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "respiratory-disorders",
      title: "Respiratory Disorders in Children",
      content: "Asthma, pneumonia, bronchiolitis, and related conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "gastrointestinal-disorders",
      title: "Gastrointestinal Disorders in Children",
      content: "Diarrhea, vomiting, dehydration, and GI conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "infectious-diseases",
      title: "Infectious Diseases",
      content: "Measles, chickenpox, mumps, malaria, and other infections.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "malnutrition",
      title: "Malnutrition",
      content: "Protein-energy malnutrition and micronutrient deficiencies.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pediatric-emergencies",
      title: "Pediatric Emergencies",
      content: "Emergency care for critically ill children.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "congenital-disorders",
      title: "Congenital Disorders",
      content: "Birth defects and congenital abnormalities.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "genetic-disorders",
      title: "Genetic Disorders",
      content: "Inherited disorders affecting children.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "cardiovascular-disorders",
      title: "Cardiovascular Disorders in Children",
      content: "Congenital heart diseases and pediatric cardiac conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "neurological-disorders",
      title: "Neurological Disorders in Children",
      content: "Seizures, epilepsy, meningitis, and neurological conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "hematological-disorders",
      title: "Hematological Disorders",
      content: "Anemia, sickle cell disease, and blood disorders.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "endocrine-disorders",
      title: "Endocrine Disorders in Children",
      content: "Diabetes mellitus and hormonal disorders.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "renal-disorders",
      title: "Renal Disorders in Children",
      content: "Kidney and urinary tract conditions.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "skin-disorders",
      title: "Skin Disorders in Children",
      content: "Common pediatric skin diseases and infections.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "childhood-cancers",
      title: "Childhood Cancers",
      content: "Leukemia and other pediatric malignancies.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "developmental-disorders",
      title: "Developmental Disorders",
      content: "Autism spectrum disorders and developmental delays.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "child-abuse-and-neglect",
      title: "Child Abuse and Neglect",
      content: "Recognition, prevention, and management.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "adolescent-health",
      title: "Adolescent Health",
      content: "Health issues affecting teenagers.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pediatric-pharmacology",
      title: "Pediatric Pharmacology",
      content: "Drug administration and dosage calculations for children.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "family-centered-care",
      title: "Family-Centered Care",
      content: "Role of family in pediatric healthcare.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    },

    {
      id: "pediatric-nursing-procedures",
      title: "Pediatric Nursing Procedures",
      content: "Clinical procedures performed in pediatric care.",
       media: [
{ type: "video", src: "https://www.youtube.com/embed/ccccc" },
]
    }

  ]
},



"first-aid": {
title: "First Aid",
image: "/images/first-aid.jpg",
sections: [
{
id: "basic-principles",
title: "Basic Principles",
content: "First aid involves immediate care before definitive treatment...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ggggg" }
]
},
{
id: "emergency-response",
title: "Emergency Response",
content: "Primary assessment and emergency response procedures...",

media: [
{ type: "image", src: "/images/emergency.jpg" },
{ type: "video", src: "https://www.youtube.com/embed/hhhhh" }
]
}
]
},



pathology: {
title: "Pathology",
image: "/images/pathology.jpg",
sections: [
{
id: "general-pathology",
title: "General Pathology",
content: "Pathology studies the causes and mechanisms of disease...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/iiiii" }
]
},
{
id: "cell-injury",
title: "Cell Injury",
content: "Cell injury may be reversible or irreversible...",

media: [
{ type: "image", src: "/images/cell-injury.jpg" }
]
}
]
},



microbiology: {
title: "Microbiology",
image: "/images/microbiology.jpg",
sections: [
{
id: "microorganisms",
title: "Microorganisms",
content: "Microbiology studies bacteria, viruses, fungi and parasites...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/kkkkk" },
{ type: "image", src: "/images/microbes.jpg" }
]
},
{
id: "infection-control",
title: "Infection Control",
content: "Principles of preventing infection transmission...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/lllll" }
]
}
]
},



"nursing-ethics": {
title: "Nursing Ethics",
image: "/images/nursing-ethics.jpg",
sections: [
{
id: "ethical-principles",
title: "Ethical Principles",
content: "Autonomy, beneficence, nonmaleficence and justice...",

media: [
{ type: "image", src: "/images/ethics.jpg" }
]
},
{
id: "professional-conduct",
title: "Professional Conduct",
content: "Ethical responsibilities of nurses in practice...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/mmmmm" }
]
}
]
},



nutrition: {
title: "Nutrition",
image: "/images/nutrition.jpg",
sections : [
  {
    id: "introduction-to-nutrition",
    title: "Introduction to Nutrition",
    content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Introduction to Nutrition
</h1>

<p class="mb-6">
Nutrition is the science that studies food, nutrients, and how the body uses them for growth, energy, repair, and maintenance of health. Good nutrition is essential for proper body functioning and overall well-being.
</p>

<p class="mb-6">
The human body requires different nutrients in appropriate amounts to remain healthy. These nutrients provide energy, help build and repair tissues, regulate body processes, and protect the body from diseases.
</p>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Definition of Nutrition
</h2>

<p class="mb-6">
Nutrition refers to the process by which living organisms obtain and utilize food substances necessary for growth, metabolism, and maintenance of life.
</p>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Importance of Nutrition
</h2>

<ul class="list-disc pl-6 space-y-3 mb-8">
<li>Provides energy for daily activities</li>
<li>Supports growth and development</li>
<li>Repairs worn-out body tissues</li>
<li>Strengthens the immune system</li>
<li>Helps maintain healthy body functions</li>
<li>Prevents nutritional deficiency diseases</li>
<li>Improves overall health and well-being</li>
</ul>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Major Nutrients
</h2>

<p class="mb-4">
The body requires six major classes of nutrients:
</p>

<ul class="list-disc pl-6 space-y-3 mb-8">
<li>Carbohydrates</li>
<li>Proteins</li>
<li>Fats and oils</li>
<li>Vitamins</li>
<li>Minerals</li>
<li>Water</li>
</ul>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Types of Nutrition
</h2>

<p class="mb-4">
There are two major types of nutrition:
</p>

<ul class="list-disc pl-6 space-y-3 mb-8">
<li>
<strong>Autotrophic Nutrition:</strong>
Organisms produce their own food, such as plants through photosynthesis.
</li>

<li>
<strong>Heterotrophic Nutrition:</strong>
Organisms depend on other organisms for food, such as humans and animals.
</li>
</ul>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Balanced Diet
</h2>

<p class="mb-6">
A balanced diet contains all essential nutrients in the correct proportions needed for healthy living. It includes carbohydrates, proteins, fats, vitamins, minerals, fiber, and water.
</p>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Malnutrition
</h2>

<p class="mb-6">
Malnutrition occurs when the body receives too little, too much, or an imbalance of nutrients. It can lead to poor growth, weakness, diseases, and other health complications.
</p>

<h2 class="text-2xl font-semibold text-slate-800 mt-10 mb-4">
Conclusion
</h2>

<p>
Nutrition plays a vital role in maintaining health, preventing diseases, and promoting growth and development. Understanding the principles of nutrition helps individuals make healthy food choices and improve their quality of life.
</p>

</div>
  `,
    media: [
      { type: "image", src: "/images/introduction-nutrition.jpg" }
    ]
  },

  {
    id: "importance-of-nutrition",
    title: "Importance of Nutrition",
    content:
      "Proper nutrition supports growth, strengthens immunity, maintains body functions, and helps prevent diseases.",

    media: [
      { type: "image", src: "/images/healthy-food.jpg" }
    ]
  },

  {
    id: "balanced-diet",
    title: "Balanced Diet",
    content:
      "A balanced diet contains the right proportion of carbohydrates, proteins, fats, vitamins, minerals, fiber, and water needed by the body.",

    media: [
      { type: "video", src: "https://www.youtube.com/embed/ppppp" }
    ]
  },

  {
    id: "carbohydrates",
    title: "Carbohydrates",
    content:
      "Carbohydrates are the main source of energy for the body and are found in foods such as rice, bread, potatoes, and fruits.",

    media: [
      { type: "image", src: "/images/carbohydrates.jpg" }
    ]
  },

  {
    id: "proteins",
    title: "Proteins",
    content:
      "Proteins are essential for growth, tissue repair, and enzyme production. Common sources include meat, eggs, fish, beans, and milk.",

    media: [
      { type: "image", src: "/images/proteins.jpg" }
    ]
  },

  {
    id: "fats-and-oils",
    title: "Fats and Oils",
    content:
      "Fats provide concentrated energy, protect organs, and help absorb fat-soluble vitamins such as vitamins A, D, E, and K.",

    media: [
      { type: "image", src: "/images/fats.jpg" }
    ]
  },

  {
    id: "vitamins",
    title: "Vitamins",
    content:
      "Vitamins are organic compounds needed in small amounts for proper body functioning, immunity, and metabolism.",

    media: [
      { type: "image", src: "/images/vitamins.jpg" }
    ]
  },

  {
    id: "minerals",
    title: "Minerals",
    content:
      "Minerals such as calcium, iron, and potassium help maintain healthy bones, blood formation, nerve function, and fluid balance.",

    media: [
      { type: "image", src: "/images/minerals.jpg" }
    ]
  },

  {
    id: "water-and-hydration",
    title: "Water and Hydration",
    content:
      "Water is essential for digestion, temperature regulation, nutrient transport, and waste removal in the body.",

    media: [
      { type: "image", src: "/images/water.jpg" }
    ]
  },

  {
    id: "digestion-and-absorption",
    title: "Digestion and Absorption",
    content:
      "Digestion breaks down food into nutrients that can be absorbed and used by the body for energy and growth.",

    media: [
      { type: "image", src: "/images/digestion.jpg" }
    ]
  },

  {
    id: "malnutrition",
    title: "Malnutrition",
    content:
      "Malnutrition occurs when the body does not receive enough or receives too much nutrients, affecting health and development.",

    media: [
      { type: "image", src: "/images/malnutrition.jpg" }
    ]
  },

  {
    id: "obesity",
    title: "Obesity",
    content:
      "Obesity is excessive accumulation of body fat that increases the risk of diseases such as diabetes and hypertension.",

    media: [
      { type: "image", src: "/images/obesity.jpg" }
    ]
  },

  {
    id: "nutrition-through-life",
    title: "Nutrition Throughout the Life Cycle",
    content:
      "Nutritional requirements vary during infancy, childhood, adolescence, adulthood, pregnancy, and old age.",

    media: [
      { type: "image", src: "/images/life-cycle-nutrition.jpg" }
    ]
  },

  {
    id: "food-hygiene",
    title: "Food Hygiene and Safety",
    content:
      "Food hygiene involves proper handling, preparation, and storage of food to prevent contamination and foodborne diseases.",

    media: [
      { type: "image", src: "/images/food-hygiene.jpg" }
    ]
  },

  {
    id: "therapeutic-diets",
    title: "Therapeutic Diets",
    content:
      "Therapeutic diets are specially planned meals designed to manage diseases such as diabetes, hypertension, and kidney disorders.",

    media: [
      { type: "image", src: "/images/therapeutic-diet.jpg" }
    ]
  },

  {
    id: "public-health-nutrition",
    title: "Public Health Nutrition",
    content:
      "Public health nutrition focuses on improving the nutritional health of communities through education and intervention programs.",

    media: [
      { type: "image", src: "/images/public-health-nutrition.jpg" }
    ]
  }
],
},
physiology: {
title: "Physiology",
image: "/images/physiology.jpg",
sections: [

    // INTRODUCTION
    {
      id: "introduction-to-physiology",
      title: "Introduction to Physiology",
      content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Introduction to Physiology
</h1>

<p class="mb-8">
Physiology is the branch of science that studies how the human body functions.
It explains the normal processes and mechanisms that occur within living organisms
to maintain life and health.
In nursing and medicine, physiology helps healthcare professionals understand
how body systems work together and how diseases affect normal body function.
</p>

<p class="mb-8">
The study of physiology is essential in nursing because nurses care for patients
whose body functions may be altered by illness, injury, or treatment.
Understanding physiology allows nurses to interpret signs and symptoms,
monitor patient conditions, and provide safe and effective care.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Definition of Physiology
</h2>

<p>
Physiology is the scientific study of the functions of living organisms
and their parts.
It focuses on how cells, tissues, organs, and body systems perform their activities
to sustain life.
</p>

<p>
Human physiology specifically studies the functioning of the human body,
including processes such as breathing, circulation, digestion,
movement, reproduction, and regulation of body temperature.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Relationship Between Anatomy and Physiology
</h2>

<p>
Anatomy and physiology are closely related sciences.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Anatomy studies the structure of the body</li>
<li>Physiology studies the function of the body</li>
<li>Structure and function are interdependent</li>
<li>Normal structure supports normal function</li>
</ul>

<p class="mt-6">
For example, the lungs have thin air sacs called alveoli.
Their thin structure allows efficient exchange of oxygen and carbon dioxide.
Thus, anatomical structure supports physiological function.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Levels of Organization of the Human Body
</h2>

<p>
The human body is organized into different levels,
ranging from simple structures to complex systems.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Chemical Level
</h3>

<p>
The chemical level includes atoms and molecules such as water,
proteins, carbohydrates, fats, and electrolytes.
These substances are necessary for body functions.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Cellular Level
</h3>

<p>
Cells are the basic structural and functional units of life.
Examples include nerve cells, muscle cells, and blood cells.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Tissue Level
</h3>

<p>
Tissues are groups of similar cells working together to perform a specific function.
The four basic tissues are:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Epithelial tissue</li>
<li>Connective tissue</li>
<li>Muscle tissue</li>
<li>Nervous tissue</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
Organ Level
</h3>

<p>
Organs are structures made of different tissues working together.
Examples include the heart, lungs, kidneys, and liver.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
System Level
</h3>

<p>
Body systems consist of organs working together to perform major body functions.
Examples include the cardiovascular system and respiratory system.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Organism Level
</h3>

<p>
The organism level refers to the complete human body,
where all systems function together to maintain life.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Characteristics of Living Organisms
</h2>

<p>
Living organisms possess certain characteristics necessary for survival.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Movement</li>
<li>Respiration</li>
<li>Growth</li>
<li>Excretion</li>
<li>Nutrition</li>
<li>Sensitivity and responsiveness</li>
<li>Reproduction</li>
<li>Metabolism</li>
</ul>

<p class="mt-6">
These activities are controlled and coordinated by various body systems.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Homeostasis
</h2>

<p>
Homeostasis refers to the maintenance of a stable internal environment
despite changes occurring inside or outside the body.
It is one of the most important concepts in physiology.
</p>

<p>
The body continuously regulates variables such as:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Body temperature</li>
<li>Blood pressure</li>
<li>Blood glucose level</li>
<li>Fluid balance</li>
<li>Oxygen concentration</li>
<li>pH balance</li>
</ul>

<p class="mt-6">
When homeostasis is disrupted,
disease or dysfunction may occur.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Components of Homeostatic Control
</h2>

<p>
Homeostatic mechanisms involve three major components.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Receptor
</h3>

<p>
The receptor detects changes in the internal or external environment.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Control Center
</h3>

<p>
The control center receives information from the receptor
and determines the appropriate response.
The brain often acts as the control center.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Effector
</h3>

<p>
The effector carries out the response to restore balance.
Examples include muscles and glands.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Feedback Mechanisms
</h2>

<p>
The body uses feedback mechanisms to regulate physiological activities.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Negative Feedback
</h3>

<p>
Negative feedback reverses a change to maintain stability.
It is the most common feedback mechanism in the body.
</p>

<p>
Examples include:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Regulation of blood glucose</li>
<li>Control of body temperature</li>
<li>Regulation of blood pressure</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
Positive Feedback
</h3>

<p>
Positive feedback enhances or amplifies a change.
It continues until a specific event is completed.
</p>

<p>
Examples include:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Uterine contractions during labor</li>
<li>Blood clotting process</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Basic Physiological Needs of the Human Body
</h2>

<p>
The body requires certain conditions and substances to survive.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Oxygen</li>
<li>Water</li>
<li>Nutrients</li>
<li>Normal body temperature</li>
<li>Adequate atmospheric pressure</li>
</ul>

<p class="mt-6">
A deficiency in any of these requirements can impair body function.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Major Body Systems and Their Functions
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Nervous System
</h3>

<p>
Controls and coordinates body activities through nerve impulses.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Cardiovascular System
</h3>

<p>
Transports blood, oxygen, nutrients, and hormones throughout the body.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Respiratory System
</h3>

<p>
Facilitates breathing and gas exchange.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Digestive System
</h3>

<p>
Breaks down food and absorbs nutrients.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Urinary System
</h3>

<p>
Removes waste products and regulates fluid balance.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Endocrine System
</h3>

<p>
Produces hormones that regulate body activities.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Musculoskeletal System
</h3>

<p>
Provides support, movement, and protection.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Reproductive System
</h3>

<p>
Responsible for reproduction and sexual functions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Importance of Physiology in Nursing
</h2>

<p>
Knowledge of physiology is essential for nursing practice.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Helps nurses understand disease processes</li>
<li>Improves patient assessment skills</li>
<li>Supports accurate monitoring of vital signs</li>
<li>Guides administration of medications</li>
<li>Assists in identifying abnormal body functions</li>
<li>Enhances critical thinking and clinical judgment</li>
<li>Promotes safe and effective patient care</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Applied Physiology
</h2>

<p>
Applied physiology explains how physiological principles
are used in healthcare and clinical practice.
</p>

<p>
Examples include:
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Monitoring blood pressure</li>
<li>Assessing respiratory rate</li>
<li>Understanding electrolyte imbalance</li>
<li>Managing diabetes mellitus</li>
<li>Providing oxygen therapy</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
12. Common Terms in Physiology
</h2>

<ul class="list-disc pl-6 space-y-2">
<li><strong>Metabolism:</strong> Chemical reactions occurring in the body</li>
<li><strong>Stimulus:</strong> A change that triggers a response</li>
<li><strong>Response:</strong> Reaction of the body to a stimulus</li>
<li><strong>Cell:</strong> Basic unit of life</li>
<li><strong>Tissue:</strong> Group of similar cells performing a function</li>
<li><strong>Organ:</strong> Structure made of tissues performing specific functions</li>
<li><strong>System:</strong> Group of organs working together</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
13. Summary
</h2>

<p>
Physiology is the study of how the human body functions.
It explains the mechanisms that maintain life and health.
Understanding physiology is essential in nursing because it provides
the scientific foundation for patient care, disease management,
clinical assessment, and treatment.
The body maintains stability through homeostasis,
while different organs and systems work together
to ensure proper functioning of the human organism.
</p>

</div>
`,
media: [
        { type: "video", src: "https://www.youtube.com/embed/FV7B7l7LWCQ" }
      ]
    },

    {
      id: "homeostasis",
      title: "Homeostasis",
      content: ""
    },

    {
      id: "cell-physiology",
      title: "Cell Physiology",
      content: ""
    },

    {
      id: "membrane-transport",
      title: "Membrane Transport",
      content: ""
    },

    {
      id: "body-fluids-electrolytes",
      title: "Body Fluids and Electrolytes",
      content: ""
    },

    {
      id: "acid-base-balance",
      title: "Acid-Base Balance",
      content: ""
    },

    // NERVOUS SYSTEM
    {
      id: "nervous-system",
      title: "Nervous System Physiology",
      content: ""
    },

    {
      id: "nerve-impulse-transmission",
      title: "Nerve Impulse Transmission",
      content: ""
    },

    {
      id: "autonomic-nervous-system",
      title: "Autonomic Nervous System",
      content: ""
    },

    {
      id: "special-senses",
      title: "Special Senses",
      content: ""
    },

    // MUSCULAR SYSTEM
    {
      id: "muscle-physiology",
      title: "Muscle Physiology",
      content: ""
    },

    {
      id: "skeletal-muscle-contraction",
      title: "Skeletal Muscle Contraction",
      content: ""
    },

    // BLOOD
    {
      id: "blood-physiology",
      title: "Blood Physiology",
      content: ""
    },

    {
      id: "hemostasis",
      title: "Hemostasis and Blood Clotting",
      content: ""
    },

    {
      id: "blood-groups",
      title: "Blood Groups and Transfusion",
      content: ""
    },

    // CARDIOVASCULAR SYSTEM
    {
      id: "cardiovascular-system",
      title: "Cardiovascular Physiology",
      content: ""
    },

    {
      id: "cardiac-cycle",
      title: "Cardiac Cycle",
      content: ""
    },

    {
      id: "blood-pressure-regulation",
      title: "Regulation of Blood Pressure",
      content: ""
    },

    {
      id: "circulation",
      title: "Systemic and Pulmonary Circulation",
      content: ""
    },

    // RESPIRATORY SYSTEM
    {
      id: "respiratory-system",
      title: "Respiratory Physiology",
      content: ""
    },

    {
      id: "mechanism-of-breathing",
      title: "Mechanism of Breathing",
      content: ""
    },

    {
      id: "gas-exchange",
      title: "Gas Exchange and Transport",
      content: ""
    },

    {
      id: "respiratory-regulation",
      title: "Regulation of Respiration",
      content: ""
    },

    // DIGESTIVE SYSTEM
    {
      id: "digestive-system",
      title: "Digestive System Physiology",
      content: ""
    },

    {
      id: "digestion-absorption",
      title: "Digestion and Absorption",
      content: ""
    },

    // ENDOCRINE SYSTEM
    {
      id: "endocrine-system",
      title: "Endocrine Physiology",
      content: ""
    },

    {
      id: "pituitary-gland",
      title: "Pituitary Gland Hormones",
      content: ""
    },

    {
      id: "thyroid-gland",
      title: "Thyroid Gland Physiology",
      content: ""
    },

    {
      id: "pancreatic-hormones",
      title: "Insulin and Glucagon",
      content: ""
    },

    {
      id: "adrenal-gland",
      title: "Adrenal Gland Physiology",
      content: ""
    },

    // URINARY SYSTEM
    {
      id: "renal-physiology",
      title: "Renal Physiology",
      content: ""
    },

    {
      id: "urine-formation",
      title: "Formation of Urine",
      content: ""
    },

    {
      id: "fluid-balance",
      title: "Water Balance and Regulation",
      content: ""
    },

    // REPRODUCTIVE SYSTEM
    {
      id: "male-reproductive-system",
      title: "Male Reproductive Physiology",
      content: ""
    },

    {
      id: "female-reproductive-system",
      title: "Female Reproductive Physiology",
      content: ""
    },

    {
      id: "menstrual-cycle",
      title: "Menstrual Cycle",
      content: ""
    },

    {
      id: "pregnancy-lactation",
      title: "Pregnancy and Lactation",
      content: ""
    },

    // IMMUNE SYSTEM
    {
      id: "immune-system",
      title: "Immune System Physiology",
      content: ""
    },

    {
      id: "immune-response",
      title: "Immune Response",
      content: ""
    },

    // TEMPERATURE
    {
      id: "temperature-regulation",
      title: "Body Temperature Regulation",
      content: ""
    },

    // EXERCISE
    {
      id: "exercise-physiology",
      title: "Exercise Physiology",
      content: ""
    }

  ]
},
histology: {
title: "Histology",
image: "/images/images.jfif",
 sections: [

    // INTRODUCTION
    {
      id: "introduction-to-histology",
      title: "Introduction to Histology",
     content: `
<div class="max-w-4xl mx-auto px-6 py-10 text-slate-700 leading-8">

<h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-8">
Introduction to Histology
</h1>

<p class="mb-8">
Histology is the branch of biology and medical science that studies the microscopic structure
of cells, tissues, and organs. It helps in understanding how the body is organized at the cellular level
and how different tissues work together to perform specific functions.
</p>

<p class="mb-8">
The study of histology is essential in nursing and medicine because many diseases begin with
microscopic changes in tissues. Histology provides the foundation for understanding normal tissue structure,
disease processes, diagnosis, and treatment.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mb-6">
1. Definition of Histology
</h2>

<p>
Histology is defined as the scientific study of the microscopic anatomy of cells and tissues.
It involves the examination of thin tissue sections under a microscope to identify their structure,
organization, and function.
</p>

<p>
Histology is sometimes referred to as microscopic anatomy because it focuses on structures
that cannot be seen with the naked eye.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
2. Importance of Histology
</h2>

<p>
Histology plays an important role in healthcare and medical sciences.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Helps understand the microscopic structure of tissues and organs</li>
<li>Provides a basis for understanding physiology and pathology</li>
<li>Assists in diagnosing diseases through tissue examination</li>
<li>Supports medical research and laboratory investigations</li>
<li>Helps healthcare professionals understand tissue damage and healing</li>
<li>Essential in cancer diagnosis and biopsy interpretation</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
3. Relationship Between Histology and Anatomy
</h2>

<p>
Histology and anatomy are closely related branches of science.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Anatomy studies structures visible to the naked eye</li>
<li>Histology studies microscopic structures</li>
<li>Both help explain body organization and function</li>
<li>Histology provides deeper understanding of tissue composition</li>
</ul>

<p class="mt-6">
For example, anatomy studies the heart as an organ,
while histology studies the cardiac muscle cells and connective tissues within the heart.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
4. Basic Levels of Organization
</h2>

<p>
The body is organized into different structural levels.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Cells
</h3>

<p>
Cells are the basic structural and functional units of life.
They carry out essential activities necessary for survival.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Tissues
</h3>

<p>
Tissues are groups of similar cells working together to perform specific functions.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Organs
</h3>

<p>
Organs are structures made up of different tissues functioning together.
Examples include the heart, liver, and kidneys.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Systems
</h3>

<p>
Organ systems consist of multiple organs working together
to maintain body functions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
5. Types of Tissues in the Human Body
</h2>

<p>
The human body contains four basic tissue types.
</p>

<ul class="list-disc pl-6 space-y-2">
<li><strong>Epithelial Tissue</strong> – covers body surfaces and lines cavities</li>
<li><strong>Connective Tissue</strong> – supports and binds structures</li>
<li><strong>Muscle Tissue</strong> – responsible for movement</li>
<li><strong>Nervous Tissue</strong> – conducts nerve impulses</li>
</ul>

<p class="mt-6">
Each tissue type has specialized cells and functions.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
6. Microscopy in Histology
</h2>

<p>
Microscopes are important tools used in histology
to observe structures too small to be seen by the naked eye.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Light Microscope
</h3>

<p>
Uses visible light to magnify tissue sections.
It is the most commonly used microscope in histology laboratories.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Electron Microscope
</h3>

<p>
Uses electron beams to provide very high magnification
and detailed views of cell structures.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
7. Histological Preparation of Tissues
</h2>

<p>
Before tissues can be examined under a microscope,
they must be properly prepared.
</p>

<h3 class="text-xl font-semibold mt-6 mb-3">
Fixation
</h3>

<p>
Preserves tissue structure and prevents decay.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Embedding
</h3>

<p>
Tissues are embedded in paraffin wax for support during cutting.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Sectioning
</h3>

<p>
Thin slices of tissue are cut using a microtome.
</p>



<h3 class="text-xl font-semibold mt-6 mb-3">
Staining
</h3>

<p>
Special dyes are used to make tissue structures visible under the microscope.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
8. Common Histological Stains
</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">
Hematoxylin and Eosin (H&E)
</h3>

<p>
The most common stain used in histology.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Hematoxylin stains nuclei blue or purple</li>
<li>Eosin stains cytoplasm pink</li>
</ul>



<h3 class="text-xl font-semibold mt-6 mb-3">
Special Stains
</h3>

<p>
Special stains are used to identify specific tissue components,
microorganisms, or abnormal substances.
</p>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
9. Clinical Importance of Histology
</h2>

<p>
Histology is important in clinical diagnosis and patient care.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Helps detect infections and inflammation</li>
<li>Used in cancer diagnosis</li>
<li>Assists in identifying tissue abnormalities</li>
<li>Supports laboratory investigations</li>
<li>Guides treatment decisions</li>
<li>Useful in biopsy interpretation</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
10. Histology and Nursing Practice
</h2>

<p>
Knowledge of histology helps nurses understand disease processes
at the cellular and tissue levels.
</p>

<ul class="list-disc pl-6 space-y-2">
<li>Improves understanding of wound healing</li>
<li>Helps explain tissue damage and repair</li>
<li>Supports understanding of cancer and tumors</li>
<li>Enhances interpretation of laboratory results</li>
<li>Strengthens clinical knowledge and patient care</li>
</ul>




<h2 class="text-2xl font-semibold border-b pb-2 mt-10 mb-6">
11. Summary
</h2>

<p>
Histology is the study of microscopic structures of cells and tissues.
It helps healthcare professionals understand how tissues are organized
and how diseases affect the body at the cellular level.
The use of microscopes, tissue preparation techniques,
and staining methods allows scientists and healthcare workers
to examine tissues for diagnosis, research, and treatment purposes.
</p>

</div>
`
    },

    {
      id: "importance-of-histology",
      title: "Importance of Histology",
      content: ""
    },

    {
      id: "microscopy",
      title: "Microscopy",
      content: ""
    },

    {
      id: "tissue-processing",
      title: "Tissue Processing and Staining",
      content: ""
    },

    {
      id: "cell-structure",
      title: "Cell Structure",
      content: ""
    },

    {
      id: "cell-organelles",
      title: "Cell Organelles",
      content: ""
    },

    {
      id: "cell-division",
      title: "Cell Division",
      content: ""
    },



    // BASIC TISSUES
    {
      id: "classification-of-tissues",
      title: "Classification of Tissues",
      content: ""
    },



    // EPITHELIAL TISSUE
    {
      id: "epithelial-tissue",
      title: "Epithelial Tissue",
      content: ""
    },

    {
      id: "classification-of-epithelium",
      title: "Classification of Epithelium",
      content: ""
    },

    {
      id: "simple-epithelium",
      title: "Simple Epithelium",
      content: ""
    },

    {
      id: "stratified-epithelium",
      title: "Stratified Epithelium",
      content: ""
    },

    {
      id: "glandular-epithelium",
      title: "Glandular Epithelium",
      content: ""
    },

    {
      id: "functions-of-epithelium",
      title: "Functions of Epithelial Tissue",
      content: ""
    },



    // CONNECTIVE TISSUE
    {
      id: "connective-tissue",
      title: "Connective Tissue",
      content: ""
    },

    {
      id: "connective-tissue-cells",
      title: "Cells of Connective Tissue",
      content: ""
    },

    {
      id: "connective-tissue-fibers",
      title: "Fibers of Connective Tissue",
      content: ""
    },

    {
      id: "loose-connective-tissue",
      title: "Loose Connective Tissue",
      content: ""
    },

    {
      id: "dense-connective-tissue",
      title: "Dense Connective Tissue",
      content: ""
    },

    {
      id: "adipose-tissue",
      title: "Adipose Tissue",
      content: ""
    },

    {
      id: "cartilage",
      title: "Cartilage",
      content: ""
    },

    {
      id: "bone-tissue",
      title: "Bone Tissue",
      content: ""
    },

    {
      id: "blood-tissue",
      title: "Blood Tissue",
      content: ""
    },



    // MUSCLE TISSUE
    {
      id: "muscle-tissue",
      title: "Muscle Tissue",
      content: ""
    },

    {
      id: "skeletal-muscle",
      title: "Skeletal Muscle",
      content: ""
    },

    {
      id: "smooth-muscle",
      title: "Smooth Muscle",
      content: ""
    },

    {
      id: "cardiac-muscle",
      title: "Cardiac Muscle",
      content: ""
    },

    {
      id: "comparison-of-muscles",
      title: "Comparison of Muscle Types",
      content: ""
    },



    // NERVOUS TISSUE
    {
      id: "nervous-tissue",
      title: "Nervous Tissue",
      content: ""
    },

    {
      id: "neurons",
      title: "Neurons",
      content: ""
    },

    {
      id: "neuroglia",
      title: "Neuroglia Cells",
      content: ""
    },

    {
      id: "synapse",
      title: "Synapse and Nerve Transmission",
      content: ""
    },



    // MEMBRANES
    {
      id: "body-membranes",
      title: "Body Membranes",
      content: ""
    },

    {
      id: "mucous-membrane",
      title: "Mucous Membrane",
      content: ""
    },

    {
      id: "serous-membrane",
      title: "Serous Membrane",
      content: ""
    },

    {
      id: "synovial-membrane",
      title: "Synovial Membrane",
      content: ""
    },



    // HISTOLOGY OF BODY SYSTEMS
    {
      id: "skin-histology",
      title: "Histology of the Skin",
      content: ""
    },

    {
      id: "respiratory-histology",
      title: "Histology of the Respiratory System",
      content: ""
    },

    {
      id: "digestive-histology",
      title: "Histology of the Digestive System",
      content: ""
    },

    {
      id: "cardiovascular-histology",
      title: "Histology of the Cardiovascular System",
      content: ""
    },

    {
      id: "urinary-histology",
      title: "Histology of the Urinary System",
      content: ""
    },

    {
      id: "endocrine-histology",
      title: "Histology of the Endocrine System",
      content: ""
    },

    {
      id: "reproductive-histology",
      title: "Histology of the Reproductive System",
      content: ""
    },



    // LABORATORY & CLINICAL
    {
      id: "histological-techniques",
      title: "Histological Techniques",
      content: ""
    },

    {
      id: "common-stains",
      title: "Common Histological Stains",
      content: ""
    },

    {
      id: "clinical-importance",
      title: "Clinical Importance of Histology",
      content: ""
    },



    // SUMMARY
    {
      id: "summary-of-histology",
      title: "Summary of Histology",
      content: ""
    }

  ]
},
"internal-medicine": {
title: "Internal Medicine",
image: "/images/nutrition.jpg",
sections: [
{
id: "basic-nutrition",
title: "Basic Nutrition",
content: "Nutrition involves nutrients needed for health and growth...",

media: [
{ type: "image", src: "/images/food-pyramid.jpg" }
]
},
{
id: "balanced-diet",
title: "Balanced Diet",
content: "A balanced diet contains carbohydrates, proteins, fats, vitamins and minerals...",

media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
}
]
},
geriatrics: {
title: "Geriatrics",
image: "/images/geriatrics.jpg",
sections: [

    {
      id: "introduction-to-geriatrics",
      title: "Introduction to Geriatrics",
      content: "Overview of aging and healthcare for older adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
      
    },

    {
      id: "aging-process",
      title: "Aging Process",
      content: "Physical, psychological, and social changes associated with aging.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "geriatric-assessment",
      title: "Geriatric Assessment",
      content: "Comprehensive assessment of elderly patients.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "nutrition-in-the-elderly",
      title: "Nutrition in the Elderly",
      content: "Nutritional needs and dietary management in aging adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "mobility-and-exercise",
      title: "Mobility and Exercise",
      content: "Maintaining physical activity and preventing falls.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "falls-and-fractures",
      title: "Falls and Fractures",
      content: "Risk factors, prevention, and management of falls.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "cognitive-disorders",
      title: "Cognitive Disorders",
      content: "Dementia, delirium, and cognitive decline.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "alzheimers-disease",
      title: "Alzheimer’s Disease",
      content: "Causes, symptoms, and management of Alzheimer’s disease.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "parkinsons-disease",
      title: "Parkinson’s Disease",
      content: "Neurological disorder affecting movement in older adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "mental-health-in-the-elderly",
      title: "Mental Health in the Elderly",
      content: "Depression, anxiety, and emotional wellbeing in aging.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "cardiovascular-disorders",
      title: "Cardiovascular Disorders in the Elderly",
      content: "Hypertension, heart failure, and cardiac diseases.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "respiratory-disorders",
      title: "Respiratory Disorders in the Elderly",
      content: "COPD, pneumonia, and respiratory complications.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "musculoskeletal-disorders",
      title: "Musculoskeletal Disorders",
      content: "Arthritis, osteoporosis, and joint disorders.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "endocrine-disorders",
      title: "Endocrine Disorders",
      content: "Diabetes and hormonal disorders in older adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "renal-and-urinary-disorders",
      title: "Renal and Urinary Disorders",
      content: "Kidney disease, urinary incontinence, and UTIs.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "sensory-impairment",
      title: "Sensory Impairment",
      content: "Vision and hearing problems in aging adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "skin-care-in-the-elderly",
      title: "Skin Care in the Elderly",
      content: "Pressure ulcers, dry skin, and wound care.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "sleep-disorders",
      title: "Sleep Disorders",
      content: "Sleep disturbances and management in older adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "polypharmacy",
      title: "Polypharmacy",
      content: "Medication management and adverse drug reactions.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "pain-management",
      title: "Pain Management",
      content: "Assessment and treatment of chronic pain in the elderly.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "palliative-care",
      title: "Palliative Care",
      content: "Comfort-focused care for chronic and terminal illness.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "end-of-life-care",
      title: "End-of-Life Care",
      content: "Care and support during the final stages of life.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "elder-abuse-and-neglect",
      title: "Elder Abuse and Neglect",
      content: "Recognition, prevention, and reporting of abuse.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "rehabilitation-and-long-term-care",
      title: "Rehabilitation and Long-Term Care",
      content: "Supportive and rehabilitative services for older adults.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    },

    {
      id: "geriatric-nursing-procedures",
      title: "Geriatric Nursing Procedures",
      content: "Clinical procedures and nursing interventions for elderly care.",
      media: [
{ type: "video", src: "https://www.youtube.com/embed/ppppp" }
]
    }

  ]
},
mentalHealth: {
title: "Mental Health",
image: "/images/psychiatry.jpg",
sections: [
    {
      id: "history-of-psychiatry",
      title: "History of Psychiatry and Psychiatric Nursing",
      content: `<h3>HISTORY OF PSYCHIATRY AND PSYCHIATRIC NURSING</h3>

<p>
To understand the changing outlook and future role of psychiatric nursing, it is important to study the history of psychiatry and how it has evolved over time. Mental illness has existed throughout human history, and individuals affected have been treated in many different ways including fear, neglect, ridicule, pity, and even torture.
</p>

<h3>EARLY UNDERSTANDING OF MENTAL ILLNESS</h3>

<p>
In ancient times, mental illness was often attributed to supernatural causes such as evil spirits. During the 15th century, Hippocrates described mental illness as a form of nervous disease. Aristotle and Galen believed it to be a disorder of the brain.
</p>

<p>
The Greeks introduced early therapeutic approaches such as open-air treatment, sun exposure, water therapy, walking, and music for mentally ill individuals.
</p>

<p>
During the Middle Ages, mentally ill persons were rejected by society and believed to be possessed by demons. This led to harsh treatment including torture, starvation, imprisonment, chaining, and execution.
</p>

<h3>EARLY INSTITUTIONAL CARE</h3>

<p>
The Bethlehem Royal Hospital in England became one of the first mental hospitals. During this period, care was largely custodial rather than therapeutic.
</p>

<h3>AGE OF REFORM AND HUMANITARIAN CARE</h3>

<p>
The 18th century marked a turning point in psychiatric care. Philippe Pinel, a French physician, introduced humane treatment by removing chains from patients and classifying mental illness based on behavior and history.
</p>

<p>
Benjamin Rush, known as the father of American Psychiatry, advocated for humane treatment and contributed significantly to early psychiatric literature in America.
</p>

<h3>EMERGENCE OF PSYCHIATRIC NURSING</h3>

<p>
Although nursing has existed since ancient times, psychiatric nursing developed mainly in the late 19th and early 20th centuries (1770–1880). Florence Nightingale played a key role by recognizing that nursing care affects patients psychologically and socially, not just physically.
</p>

<p>
One of the first psychiatric nursing school was established at McLean Hospital in 1882, Massachusetts.
</p>

<p>
In 1915, Linda Richards became the first graduate nurse in the United States, marking the beginning of formal psychiatric nursing practice.
</p>

<h3>DEVELOPMENT IN THE 20TH CENTURY</h3>

<p>
By 1939, about half of nursing schools offered psychiatric nursing courses. During World War II, staff shortages led to rapid expansion of nursing education.
</p>

<p>
In the 1940s, psychiatric nursing became more integrated into general nursing practice, though roles were still mostly custodial.
</p>

<h3>THEORETICAL AND PROFESSIONAL DEVELOPMENT</h3>

<p>
The 1950s and 1960s marked a period of major development in psychiatric nursing theory and education.
</p>

<ul>
<li><strong>1952:</strong> Hildegard Peplau published "Interpersonal Relations in Nursing", the first psychiatric nursing theory.</li>
<li><strong>1956:</strong> Introduction of psychiatric clinical nurse specialist (master’s level training).</li>
<li><strong>1960:</strong> First nursing doctorate program established at Boston University.</li>
<li><strong>1961:</strong> Ida Jean Orlando introduced the "Dynamic Nurse-Patient Relationship".</li>
</ul>

<h3>COMMUNITY MENTAL HEALTH MOVEMENT</h3>

<p>
In 1963, Community Mental Health Centers were introduced to provide outpatient services, emergency care, and rehabilitation in community settings.
</p>

<h3>PROFESSIONAL STANDARDS AND MODERN ERA</h3>

<p>
In 1967, the first statement was made on the practice of for psychitric nursing.
In 1973, the American Nurses Association published the Standards of Practice for Psychiatric Nursing.
</p>

<p>
Other major developments include:
</p>

<ul>
<li>Sigmund Freud (1856–1939): Psychoanalytic theory</li>
<li>Eugen Bleuler: Identification of schizophrenia</li>
<li>1930s: Introduction of insulin shock therapy and electroconvulsive therapy (ECT)</li>
<li>1980: Mental Health Systems Act supporting mental health reforms</li>
</ul>

<h3>SUMMARY</h3>

<p>
Psychiatric nursing has evolved from custodial care to a professional, theory-based, and community-oriented discipline focused on holistic mental health care.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "definition-roles-standards",
      title: "Definition, Roles and Practice Standards of Psychiatric Nursing",
      content: `<h3>DEFINITION OF PSYCHIATRIC NURSING</h3>

<p>
Psychiatric nursing is an interpersonal process that enhances the mental health of individuals, families, and society. It helps professional nurses in preventing or coping with mental illness and suffering, and when necessary, supports patients in finding meaning in their experiences.
</p>

<p>
Psychiatric–mental health nursing refers to two interconnected aspects of care:
</p>

<ul>
<li><strong>Psychiatric nursing:</strong> Focuses on care and rehabilitation of individuals with identifiable mental illnesses.</li>
<li><strong>Mental health nursing:</strong> Focuses on promoting wellness and preventing mental illness.</li>
</ul>

<p>
It integrates behavioral sciences and nursing knowledge to provide care at primary, secondary, and tertiary levels.
</p>

---

<h3>PHENOMENA OF CONCERN IN PSYCHIATRIC–MENTAL HEALTH NURSING</h3>

<ul>
<li>Promotion of optimal mental and physical health and prevention of mental illness</li>
<li>Impaired functioning due to psychological, psychiatric, or physiological distress</li>
<li>Disturbances in thinking, perception, and communication</li>
<li>Behaviors indicating risk to self or others</li>
<li>Emotional stress related to illness, pain, disability, and loss</li>
<li>Side effects or toxicity from psychopharmacological drugs</li>
<li>Substance and alcohol abuse affecting treatment outcomes</li>
<li>Changes in self-concept, body image, and life processes</li>
<li>Physical symptoms associated with mental conditions</li>
<li>Sociocultural, spiritual, and environmental influences on mental health</li>
<li>Social issues such as poverty, violence, and substance abuse</li>
</ul>

---

<h3>PEPLAU’S SUBROLES IN NURSING</h3>

<p><strong>The Stranger:</strong> The nurse treats the patient with respect and without bias while building initial rapport.</p>

<p><strong>The Resource Person:</strong> The nurse provides accurate information and answers to patient questions.</p>

<p><strong>The Teacher:</strong> The nurse identifies learning needs and provides health education.</p>

<p><strong>The Technical Expert:</strong> The nurse applies clinical skills to ensure safe and effective care.</p>

<p><strong>The Leader:</strong> Encourages patient participation in care planning (democratic approach).</p>

<p><strong>The Surrogate:</strong> The patient may unconsciously view the nurse as a significant figure from their past.</p>

<p><strong>The Counselor:</strong> Helps patients understand and adapt to emotional and psychological challenges.</p>

---

<h3>BASIC PHILOSOPHY OF PSYCHIATRIC NURSING PRACTICE</h3>

<ul>
<li>Every individual is valuable and capable of self-improvement.</li>
<li>Every individual has the ability to adapt and change.</li>
<li>Human beings are holistic (biological, psychological, social).</li>
<li>Meeting basic needs is essential for well-being.</li>
<li>Nursing care is based on individual, family, and community needs.</li>
<li>Every behavior has meaning and clinical significance.</li>
<li>Illness can be a pathway for personal growth and coping development.</li>
</ul>

---

<h3>STANDARDS OF PSYCHIATRIC NURSING PRACTICE</h3>

<p>
The American Nurses Association (ANA) established psychiatric nursing standards in 1973 to guide professional practice.
</p>

<h3>IMPORTANCE OF PROFESSIONAL STANDARDS</h3>

<ul>
<li>Provide measurable criteria for nursing practice</li>
<li>Define required knowledge and skills</li>
<li>Improve quality of care</li>
<li>Promote nursing as a professional discipline</li>
</ul>

---

<h3>ANA PRACTICE STANDARDS</h3>

<p><strong>Standard 1: Theory Development</strong> – Practice is based on scientific knowledge and nursing theory.</p>

<p><strong>Standard 2: Data Collection</strong> – Systematic collection of patient information.</p>

<p><strong>Standard 3: Diagnosis</strong> – Identification of patient problems and risks.</p>

<p><strong>Standard 4: Planning</strong> – Development of individualized care plans.</p>

<p><strong>Standard 5: Application</strong> – Implementation of interventions including therapy, education, and rehabilitation.</p>

<p><strong>Standard 6: Assessment</strong> – Continuous evaluation of patient progress and adjustment of care.</p>

<p><strong>Standard 7: Peer Evaluation</strong> – Collaboration with colleagues to evaluate care quality.</p>

<p><strong>Standard 8: In-Service Training</strong> – Continuous professional development and learning.</p>

<p><strong>Standard 9: Interdisciplinary Cooperation</strong> – Collaboration with healthcare teams.</p>

<p><strong>Standard 10: Community Health Systems</strong> – Participation in community mental health programs.</p>

<p><strong>Standard 11: Research</strong> – Contribution to nursing and mental health research.</p>

---

<h3>BENEFITS OF PRACTICE STANDARDS</h3>

<ul>
<li>Eliminates ambiguity in nursing practice</li>
<li>Improves consistency and quality of care</li>
<li>Reduces service errors and inefficiencies</li>
<li>Guides training and professional development</li>
<li>Promotes interdisciplinary collaboration</li>
<li>Improves patient outcomes and healthcare systems</li>
</ul>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "mental-status-examination",
      title: "The Mental Status Examination",
      content: `<h3>THE MENTAL STATUS EXAMINATION (MSE)</h3>

<p>
The Mental Status Examination is a central component of psychiatric assessment used to evaluate a client’s current cognitive, emotional, and behavioral functioning through systematic observation and questioning.
</p>

<p>The MSE assesses the following domains:</p>

<ul>
<li>Appearance, behavior, and speech</li>
<li>Level of consciousness</li>
<li>Thought content and thought process</li>
<li>Cognitive ability</li>
<li>Mood and affect</li>
<li>Insight and judgment</li>
<li>Perception</li>
</ul>

---

<h3>APPEARANCE, BEHAVIOR AND SPEECH</h3>

<p>
From the first interaction, nurses observe behavior that may indicate mental disturbance. Observations should be objective and non-judgmental.
</p>

<p><strong>Examples of abnormal behaviors:</strong></p>

<ul>
<li><strong>Automatisms:</strong> Repetitive purposeless movements such as finger drumming, foot tapping, or hair twisting (often linked to anxiety)</li>
<li><strong>Psychomotor retardation:</strong> Slowed physical and emotional responses</li>
<li><strong>Waxy flexibility:</strong> Maintenance of an imposed posture, even if uncomfortable</li>
</ul>

<p><strong>Speech assessment includes:</strong></p>

<ul>
<li>Rate: fast or slow speech</li>
<li>Volume: loud or soft speech</li>
<li>Relevance: answers appropriate or irrelevant</li>
<li>Continuity: perseveration or inability to shift topics</li>
<li>Special speech patterns: neologisms, rhyming, minimal responses</li>
</ul>

---

<h3>LEVEL OF CONSCIOUSNESS</h3>

<p>
This refers to alertness and awareness of surroundings and interaction. Disturbances may include sedation, confusion, or hypervigilance.
</p>

---

<h3>THOUGHT CONTENT AND THOUGHT PROCESS</h3>

<p><strong>Thought content</strong> refers to what the client is thinking.</p>

<p><strong>Delusions:</strong> Fixed false beliefs not based on reality.</p>

<ul>
<li><strong>Grandiose:</strong> Belief of great power, wealth, or identity</li>
<li><strong>Persecutory:</strong> Belief of being watched, harmed, or plotted against</li>
<li><strong>Somatic:</strong> False beliefs about body defects or illness</li>
<li><strong>Nihilistic:</strong> Belief that self or world does not exist or is ending</li>
<li><strong>Religious:</strong> False spiritual or divine beliefs</li>
<li><strong>Referential:</strong> Belief that media or events are directed at them</li>
</ul>

<p><strong>Other thought disturbances:</strong></p>

<ul>
<li><strong>Thought broadcasting:</strong> Belief that others can hear one’s thoughts</li>
<li><strong>Thought insertion:</strong> Belief that thoughts are placed by others</li>
<li><strong>Thought withdrawal:</strong> Belief that thoughts are being removed</li>
</ul>

<p><strong>Thought process abnormalities:</strong></p>

<ul>
<li>Loose associations: disconnected ideas</li>
<li>Flight of ideas: rapid shifting thoughts</li>
<li>Thought blocking: sudden interruption of thought</li>
<li>Tangentiality: indirect and off-topic responses</li>
<li>Circumstantiality: excessive unnecessary detail before answering</li>
<li>Word salad: incoherent mixture of words</li>
</ul>

---

<h3>COGNITIVE ABILITY</h3>

<p>This assesses orientation, memory, attention, and abstract thinking.</p>

<p><strong>Orientation:</strong> Person, place, and time. Loss occurs in reverse order.</p>

<p><strong>Memory:</strong></p>
<ul>
<li>Immediate: repeat words immediately</li>
<li>Recent: recall after few minutes or recent events</li>
<li>Remote: past events (e.g., childhood, personal data)</li>
</ul>

<p><strong>Attention and concentration:</strong> Tasks such as:</p>
<ul>
<li>Spell “WORLD” backward</li>
<li>Serial subtraction (100 minus 7)</li>
<li>Recite days of the week backward</li>
</ul>

<p><strong>Abstract reasoning:</strong> Interpretation of proverbs. Literal interpretation suggests concrete thinking.</p>

---

<h3>MOOD AND AFFECT</h3>

<p><strong>Mood:</strong> Subjective emotional state (e.g., happy, sad, anxious, euphoric, angry).</p>

<p><strong>Labile mood:</strong> Rapid emotional changes.</p>

<p><strong>Affect:</strong> Observed emotional expression.</p>

<ul>
<li>Flat affect: no expression</li>
<li>Blunted affect: reduced expression</li>
<li>Restricted affect: limited range of emotion</li>
<li>Inappropriate affect: emotion not matching situation</li>
</ul>

---

<h3>INSIGHT AND JUDGMENT</h3>

<p><strong>Insight:</strong> Awareness and understanding of one’s condition. Poor insight may involve denial or delusional explanations.</p>

<p><strong>Judgment:</strong> Ability to make appropriate decisions based on reality.</p>

<p>Example question: “What would you do if you found a stamped envelope on the ground?”</p>

---

<h3>PERCEPTION</h3>

<p>
Perception involves sensory interpretation of the environment.
</p>

<p><strong>Hallucinations:</strong> False sensory perceptions without external stimuli.</p>

<ul>
<li>Auditory (most common in schizophrenia)</li>
<li>Visual</li>
<li>Tactile</li>
<li>Olfactory</li>
<li>Gustatory</li>
</ul>

<p><strong>Other perceptual disturbances:</strong></p>

<ul>
<li><strong>Illusions:</strong> Misinterpretation of real stimuli</li>
<li><strong>Depersonalization:</strong> Feeling detached from self</li>
<li><strong>Derealization:</strong> Environment feels unreal</li>
<li><strong>Déjà vu / Jamais vu:</strong> Familiarity or unfamiliarity distortions</li>
<li><strong>Micropsia/Macropsia:</strong> Objects appear smaller or larger</li>
<li><strong>Synesthesia:</strong> Sensory crossover (e.g., hearing colors)</li>
</ul>

<p><strong>Clinical importance:</strong></p>
<ul>
<li>Auditory hallucinations often occur in schizophrenia</li>
<li>Visual hallucinations may suggest organic causes (drugs, delirium)</li>
<li>Command hallucinations require urgent risk assessment</li>
</ul>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "culture-and-psychiatry",
      title: "Culture and Psychiatry",
      content: `<h3>CULTURE AND PSYCHIATRY</h3>

<p>
Culture plays an important role in how mental health and mental illness are understood, expressed, and treated. Every culture develops its own way of interpreting psychological experiences.
</p>

<h3>QUALITIES OF A PERSON WITH GOOD MENTAL HEALTH</h3>

<ul>
<li>Ability to tolerate stress without excessive anxiety, sadness, or insecurity</li>
<li>Healthy self-confidence and self-esteem</li>
<li>Ability to take responsibility and fulfill obligations</li>
<li>Hopeful outlook and ability to plan for the future</li>
<li>Ability to take initiative and act independently</li>
<li>Ability to self-reflect and accept criticism</li>
<li>Ability to distinguish fantasy from reality</li>
<li>Problem-solving skills</li>
<li>Ability to form relationships based on love and respect</li>
<li>Values and beliefs that are socially acceptable</li>
<li>Engagement in leisure, relaxation, and personal development activities</li>
</ul>

---

<h3>CULTURAL INFLUENCE IN PSYCHIATRY (CASE EXAMPLE)</h3>

<p>
In some cultures, mental health symptoms may be interpreted differently from Western psychiatric definitions. For example, sugarcane workers in Brazil described symptoms such as dizziness, numbness, emotional instability, and tremors as “nervios.”
</p>

<p>
Local interpretations may differ from biomedical explanations. In some cases, healthcare providers may misinterpret these culturally influenced symptoms and prescribe psychiatric medication without considering social factors such as malnutrition or poverty.
</p>

<p>
This highlights the importance of understanding mental health within cultural context.
</p>

---

<h3>PSYCHODYNAMIC FOUNDATIONS OF BEHAVIOR</h3>

<p><strong>Phylogenetic determinants:</strong> Universal inherited factors influencing behavior.</p>
<p><strong>Ontogenetic determinants:</strong> Environmental, physical, and psychosocial influences.</p>

<p><strong>Descriptive psychiatry:</strong> Focuses on symptoms and diagnosis (Kraepelin).</p>
<p><strong>Dynamic psychiatry:</strong> Focuses on unconscious psychological processes (Freud).</p>

---

<h3>BASIC CONCEPTS OF DYNAMIC PSYCHIATRY</h3>

<h4>Levels of Consciousness</h4>

<p><strong>Conscious:</strong> Awareness, logic, and reality-based thinking dominate.</p>

<p><strong>Preconscious:</strong> Information that can be easily recalled.</p>

<p><strong>Unconscious:</strong> Hidden thoughts and memories influencing behavior; accessible through therapy such as hypnosis or free association.</p>

---

<h4>Structural Model of Personality</h4>

<p><strong>ID:</strong> Primitive instincts; operates on pleasure principle.</p>
<p><strong>EGO:</strong> Reality-based mediator between id, superego, and environment.</p>
<p><strong>SUPEREGO:</strong> Moral conscience formed from social and parental standards.</p>

---

<h3>STRESS</h3>

<p><strong>Stimulus model:</strong> Stress occurs due to external demands or stimuli.</p>
<p><strong>Response model:</strong> Stress is the total physiological, emotional, and behavioral reaction.</p>

<p><strong>Stress tolerance:</strong> Ability to cope with stress in physical, emotional, mental, and social ways.</p>

<p><strong>Distress:</strong> Negative stress that causes dysfunction.</p>
<p><strong>Eustress:</strong> Positive stress that motivates performance.</p>

---

<h3>DECOMPENSATION</h3>

<p>
A state in which psychological defenses fail, leading to loss of emotional and behavioral stability and use of maladaptive coping mechanisms.
</p>

---

<h3>BLOCKING AND CONFLICT</h3>

<p><strong>Blocking:</strong> Sudden interruption of thought or action due to psychological tension.</p>

<p><strong>Conflict:</strong> Occurs when an individual faces incompatible desires or choices.</p>

<ul>
<li><strong>Approach–approach conflict:</strong> Choosing between two desirable options</li>
<li><strong>Avoidance–avoidance conflict:</strong> Choosing between two undesirable options</li>
<li><strong>Approach–avoidance conflict:</strong> A situation that is both attractive and unpleasant</li>
</ul>

---

<h3>TRANSFERENCE AND COUNTERTRANSFERENCE</h3>

<p><strong>Transference:</strong> Patients unconsciously transfer feelings from past relationships onto healthcare providers.</p>

<p><strong>Countertransference:</strong> Emotional reaction of healthcare provider toward the patient influenced by personal feelings.</p>

---

<h3>INSIGHT</h3>

<p><strong>Insight:</strong> Ability to understand and interpret one’s own behavior realistically.</p>

<p><strong>Clinical insight:</strong> Awareness of having a mental illness.</p>

<p><strong>Analytical insight:</strong> Understanding the underlying causes of behavior.</p>

---

<h3>PRIMARY AND SECONDARY GAIN</h3>

<p><strong>Primary gain:</strong> Psychological relief from anxiety through symptom formation.</p>

<p><strong>Secondary gain:</strong> External benefits obtained from being ill (e.g., attention, avoidance of responsibility).</p>

---

<h3>ALTRUISM</h3>

<p>
Altruism refers to selfless concern for others, often seen in healthcare professionals who prioritize patient wellbeing.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "defense-mechanisms",
      title: "Defense Mechanisms",
      content: `<h3>DEFENSE MECHANISMS</h3>

<p>
Defense mechanisms are unconscious psychological strategies used by the ego to reduce anxiety, protect self-esteem, and manage internal or external conflict.
</p>

<h3>FUNCTIONS OF DEFENSE MECHANISMS</h3>

<ul>
<li>Provide relief from emotional turmoil and stress</li>
<li>Reduce anxiety and psychological tension</li>
<li>Protect self-esteem and ego integrity</li>
<li>Help the individual cope with conflict and frustration</li>
<li>Increase psychological resilience</li>
</ul>

<h3>POSITIVE AND NEGATIVE ASPECTS</h3>

<p><strong>Positive:</strong> Helps coping, emotional stability, and adaptation.</p>
<p><strong>Negative:</strong> Excessive use may distort reality and impair functioning.</p>

---

<h3>MAJOR DEFENSE MECHANISMS</h3>

<h4>1. Repression</h4>
<p>
Unconscious blocking of unpleasant thoughts, memories, or impulses from awareness.
</p>

<h4>2. Denial</h4>
<p>
Refusal to accept reality that is too painful or threatening.
</p>

<h4>3. Projection</h4>
<p>
Attributing one’s unacceptable feelings or impulses to others.
</p>

<h4>4. Introjection</h4>
<p>
Internalizing the beliefs or characteristics of others as part of the self.
</p>

<h4>5. Splitting</h4>
<p>
Viewing people or situations as all good or all bad. Common in borderline and psychotic disorders.
</p>

<h4>6. Dissociation</h4>
<p>
Separation of thoughts, memories, or emotions from consciousness to reduce anxiety.
</p>

<h4>7. Displacement</h4>
<p>
Redirecting emotions from a threatening target to a safer one.
</p>

<h4>8. Rationalization</h4>
<p>
Creating logical but false explanations to justify behavior or reduce guilt.
</p>

<h4>9. Reaction Formation</h4>
<p>
Expressing the opposite of true feelings or impulses.
</p>

<h4>10. Intellectualization</h4>
<p>
Using logic and facts to avoid emotional involvement in distressing situations.
</p>

<h4>11. Isolation of Affect</h4>
<p>
Separating emotional feelings from thoughts or memories.
</p>

<h4>12. Conversion</h4>
<p>
Psychological conflict is transformed into physical symptoms (e.g., paralysis, blindness).
</p>

<h4>13. Undoing</h4>
<p>
Attempting to “cancel out” a thought or action with another behavior. Common in OCD.
</p>

<h4>14. Fixation</h4>
<p>
Development becomes stuck at a particular stage due to unresolved conflicts.
</p>

<h4>15. Regression</h4>
<p>
Return to earlier developmental behavior under stress.
</p>

<h4>16. Fantasy Formation</h4>
<p>
Escaping reality through imagination to fulfill unmet desires.
</p>

<h4>17. Identification</h4>
<p>
Adopting traits, beliefs, or behaviors of another person unconsciously.
</p>

<h4>18. Sublimation</h4>
<p>
Channeling unacceptable impulses into socially acceptable and productive activities (most mature defense).
</p>

<h4>19. Concretization</h4>
<p>
Making abstract thoughts more concrete and fixed, often seen in psychosis.
</p>

---

<h3>CLINICAL IMPORTANCE</h3>

<p>
Defense mechanisms are normal psychological processes, but excessive or maladaptive use may indicate underlying mental illness.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "classification-mental-illness",
      title: "Classification of Mental Illnesses",
      content: `<h3>CLASSIFICATION OF MENTAL ILLNESSES</h3>

<p>
Psychiatry has evolved from subjective interpretation to a structured discipline based on standardized diagnostic systems and classification criteria.
</p>

---

<h3>CLASSIFICATION SYSTEMS IN PSYCHIATRY</h3>

<h4>DSM-5 (Diagnostic and Statistical Manual of Mental Disorders)</h4>

<p>
The DSM-5 is published by the American Psychiatric Association and is widely used for diagnosing mental disorders, especially in the United States.
</p>

<p>
First introduced in 1952, DSM-5 was released in 2013 and provides standardized criteria for diagnosing mental illnesses.
</p>

<p><strong>Functions of DSM-5:</strong></p>

<ul>
<li>Standardized diagnosis of mental disorders</li>
<li>Guides treatment planning</li>
<li>Supports clinical research</li>
<li>Used for insurance and billing purposes</li>
</ul>

<p><strong>Classification includes:</strong></p>

<ul>
<li>Mood disorders</li>
<li>Anxiety disorders</li>
<li>Psychotic disorders</li>
<li>Personality disorders</li>
<li>Neurodevelopmental disorders</li>
</ul>

<p>
DSM-5 introduced new disorders such as hoarding disorder and disruptive mood dysregulation disorder.
</p>

---

<h4>ICD-11 (International Classification of Diseases)</h4>

<p>
The ICD-11 is published by the World Health Organization (WHO) and is a global classification system for all diseases, including mental disorders.
</p>

<p>
The latest version (ICD-11) was released in 2022 and is used worldwide for clinical diagnosis and health reporting.
</p>

<p><strong>Key features:</strong></p>

<ul>
<li>Global medical classification system</li>
<li>Covers both physical and mental disorders</li>
<li>Allows multiple diagnostic coding</li>
<li>Improved classification of complex and comorbid conditions</li>
</ul>

<p>
ICD-11 includes updated classifications for mood disorders, anxiety disorders, psychotic disorders, and trauma-related conditions.
</p>

---

<h3>DIFFERENCE BETWEEN DSM-5 AND ICD-11</h3>

<ul>
<li><strong>DSM-5:</strong> Mainly used in the United States and focuses on mental disorders only</li>
<li><strong>ICD-11:</strong> Global system covering all diseases including mental health conditions</li>
</ul>

---

<h3>PSYCHOSIS VS NEUROSIS</h3>

<h4>Neurosis (Psychoneurosis)</h4>

<p>
Neurosis refers to mental disorders characterized by anxiety and defense mechanisms without loss of contact with reality.
</p>

<p><strong>Features of neurosis:</strong></p>

<ul>
<li>Reality testing remains intact</li>
<li>Patient is aware of illness (insight present)</li>
<li>Mild to moderate functional impairment</li>
<li>Anxiety is the central feature</li>
</ul>

<p><strong>Examples:</strong> phobias, obsessive-compulsive disorder, hysteria</p>

---

<h4>Psychosis</h4>

<p>
Psychosis is a severe mental disorder in which the individual loses contact with reality.
</p>

<p><strong>Features of psychosis:</strong></p>

<ul>
<li>Loss of reality testing</li>
<li>Delusions and hallucinations present</li>
<li>Poor or absent insight</li>
<li>Severe impairment in social and occupational functioning</li>
</ul>

---

<h3>PSYCHODYNAMIC VIEW OF NEUROSIS</h3>

<p>
In psychoanalytic theory, neurosis is primarily driven by anxiety. This anxiety may be:
</p>

<ul>
<li>Directly expressed</li>
<li>Repressed and converted into symptoms</li>
<li>Displaced into phobias, obsessions, or compulsions</li>
</ul>

<p>
For example, anxiety may be transformed into physical symptoms (conversion disorder) or ritual behaviors (OCD).
</p>

---

<h3>SUMMARY</h3>

<ul>
<li>DSM-5 and ICD-11 are modern standardized classification systems for mental disorders</li>
<li>DSM-5 is mainly used in clinical psychiatry and research in the US</li>
<li>ICD-11 is a global medical classification system</li>
<li>Neurosis involves anxiety with preserved reality testing</li>
<li>Psychosis involves loss of contact with reality</li>
</ul>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "general-symptoms-psychiatric",
      title: "General Symptoms in Psychiatric Disease",
      content: `<h3>GENERAL SYMPTOMS IN PSYCHIATRIC DISEASES</h3>

<p>
Modern psychiatry evaluates patients using a biopsychosocial approach, considering biological, psychological, and social factors as a unified system.
A structured clinical assessment begins with a detailed patient history and mental state evaluation.
</p>

---

<h3>I. GENERAL APPEARANCE</h3>

<p>
General appearance provides important diagnostic clues but is not sufficient alone for diagnosis.
It includes hygiene, grooming, posture, facial expression, speech, and behavior.
</p>

<p>
Abnormal physical features such as gigantism, acromegaly, Cushing’s syndrome, or Wilson’s disease may indicate underlying medical conditions associated with psychiatric symptoms.
</p>

---

<h3>II. COGNITIVE FUNCTIONS (SENSORIUM)</h3>

<ul>
<li>Consciousness</li>
<li>Attention</li>
<li>Orientation</li>
<li>Perception</li>
<li>Memory</li>
<li>Judgment</li>
<li>Insight</li>
</ul>

---

<h3>III. PSYCHOPHYSIOLOGY</h3>

<ul>
<li>Sleep patterns</li>
<li>Eating habits</li>
<li>Urination and defecation</li>
<li>Sexual function</li>
<li>Memory function</li>
<li>Eye contact and emotional expression</li>
</ul>

<p>
Eye contact may indicate emotional state:
avoidance may suggest anxiety, hostility, or withdrawal.
</p>

---

<h3>IV. SPEECH AND LANGUAGE</h3>

<p>
Speech reflects thought processes. Abnormalities may suggest psychiatric or neurological disorders.
</p>

<h4>Speech Abnormalities</h4>

<ul>
<li><b>Logorrhea:</b> Excessive and uncontrolled speech (mania)</li>
<li><b>Word salad:</b> Incoherent speech</li>
<li><b>Dysphonia:</b> Weak or hoarse speech</li>
<li><b>Aphonia:</b> Loss of voice</li>
<li><b>Mutism:</b> Complete absence of speech</li>
</ul>

---

<h3>V. DISORDERS OF CONSCIOUSNESS</h3>

<ul>
<li>Clouding: reduced clarity of thought</li>
<li>Obnubilation: dream-like confusion</li>
<li>Somnolence: drowsiness</li>
<li>Stupor: reduced response to stimuli</li>
<li>Semi-coma: only response to pain</li>
<li>Coma: no response to stimuli</li>
</ul>

---

<h3>VI. DELIRIUM</h3>

<p>
Delirium is an acute confusion state characterized by disorientation, hallucinations, fear, agitation, and fluctuating consciousness.
</p>

---

<h3>VII. ORIENTATION</h3>

<ul>
<li><b>Time</b></li>
<li><b>Place</b></li>
<li><b>Person</b></li>
</ul>

<p>
Disorientation typically affects time first, then place, and finally person.
Recovery occurs in reverse order.
</p>

---

<h3>VIII. ATTENTION</h3>

<p>
Attention is the ability to focus and sustain mental activity.
</p>

<ul>
<li><b>Hypervigilance:</b> excessive alertness</li>
<li><b>Distractibility:</b> inability to sustain attention (mania)</li>
<li><b>Selective inattention:</b> avoidance of stimuli</li>
</ul>

---

<h3>IX. MEMORY</h3>

<p>
Memory is the process of encoding, storing, and retrieving information.
</p>

<ul>
<li><b>Hypermnesia:</b> increased memory</li>
<li><b>Hypomnesia:</b> reduced memory</li>
<li><b>Amnesia:</b> memory loss</li>
<li><b>Anterograde amnesia:</b> cannot form new memories</li>
<li><b>Retrograde amnesia:</b> loss of past memories</li>
<li><b>Fugue:</b> sudden travel with identity loss</li>
<li><b>Confabulation:</b> false memory filling gaps</li>
<li><b>Déjà vu:</b> false familiarity</li>
<li><b>Jamais vu:</b> familiar things feel new</li>
</ul>

---

<h3>X. PERCEPTION</h3>

<ul>
<li><b>Illusion:</b> misinterpretation of real stimulus</li>
<li><b>Hallucination:</b> perception without stimulus</li>
<li><b>Depersonalization:</b> feeling detached from self</li>
<li><b>Derealization:</b> feeling environment is unreal</li>
</ul>

<p>
Types of hallucinations: auditory, visual, olfactory, gustatory, tactile.
</p>

---

<h3>XI. JUDGMENT</h3>

<p>
Judgment is the ability to evaluate situations and act appropriately.
It is impaired in psychosis and organic brain disorders (e.g., dementia, delirium).
</p>

---

<h3>XII. THOUGHT DISORDERS</h3>

<h4>Form of Thought</h4>

<ul>
<li>Flight of ideas</li>
<li>Thought blocking</li>
<li>Tangentiality</li>
<li>Neologism</li>
<li>Word salad</li>
<li>Perseveration</li>
<li>Clang associations</li>
</ul>

<h4>Content of Thought</h4>

<ul>
<li><b>Delusions:</b> fixed false beliefs</li>
<li><b>Obsessions:</b> intrusive thoughts</li>
<li><b>Phobias:</b> irrational fears</li>
</ul>

<h4>Types of Delusions</h4>

<ul>
<li>Grandiose</li>
<li>Persecutory</li>
<li>Somatic</li>
<li>Nihilistic</li>
<li>Erotomanic</li>
<li>Reference</li>
<li>Influence/control</li>
</ul>

---

<h3>XIII. SLEEP AND NUTRITION DISORDERS</h3>

<ul>
<li><b>Dyssomnia:</b> sleep initiation or maintenance problems</li>
<li><b>Parasomnia:</b> abnormal behaviors during sleep</li>
<li><b>Bulimia:</b> binge eating</li>
<li><b>Stiophobia:</b> food avoidance</li>
<li><b>Coprophagia:</b> eating inedible substances</li>
</ul>

---

<h3>XIV. MOTOR AND WILL DISORDERS</h3>

<ul>
<li>Abulia: loss of will</li>
<li>Hypobulia: reduced willpower</li>
<li>Hyperactivity: increased movement</li>
<li>Agitation: restless and aggressive behavior</li>
<li>Bradykinesia: slowed movement</li>
<li>Compulsions: repetitive acts</li>
<li>Kleptomania: stealing impulse</li>
<li>Pyromania: fire-setting impulse</li>
</ul>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "nursing-approach",
      title: "Systematic Nursing Approach in Psychiatric Nursing",
      content: `<h3>SYSTEMATIC (PLANNED) NURSING APPROACH IN PSYCHIATRIC NURSING</h3>

<p>
A nursing care plan is a structured guide that outlines nursing actions to be provided to a patient.
It is developed based on assessment findings and focuses on solving identified nursing problems.
It serves as an intermediate stage of the nursing process and guides ongoing care and evaluation.
</p>

---

<h3>CHARACTERISTICS OF A NURSING CARE PLAN</h3>

<ul>
<li>Focuses on actions aimed at solving or minimizing patient problems</li>
<li>Developed through a deliberate and systematic process</li>
<li>Future-oriented (planned interventions)</li>
<li>Based on identifiable health and nursing problems</li>
<li>Holistic in nature (biological, psychological, social)</li>
</ul>

---

<h3>STAGES OF THE NURSING PROCESS</h3>

<ol>
<li><b>Assessment:</b> Collecting patient data and evaluating needs</li>
<li><b>Diagnosis:</b> Identifying human response problems</li>
<li><b>Planning:</b> Designing individualized care plans</li>
<li><b>Implementation:</b> Carrying out nursing interventions</li>
<li><b>Evaluation:</b> Assessing effectiveness of care provided</li>
</ol>

---

<h3>PATIENT HISTORY</h3>

<ul>
<li>Name (or preferred name)</li>
<li>Marital status</li>
<li>Occupation</li>
<li>Religious beliefs</li>
<li>Living circumstances</li>
</ul>

---

<h3>MENTAL STATUS EXAMINATION (SUMMARY)</h3>

<ul>
<li><b>Appearance:</b> grooming, posture, eye contact</li>
<li><b>Mood:</b> sustained emotional state</li>
<li><b>Affect:</b> emotional expression</li>
<li><b>Speech:</b> rate, tone, fluency, volume</li>
<li><b>Thought Process:</b> logical flow of thinking</li>
<li><b>Insight & Judgment:</b> awareness and decision-making ability</li>
</ul>

---

<h3>OBSERVATION GUIDE</h3>

<h4>1. Physical Symptoms</h4>
<p>Includes vital signs, weight, general appearance, and physiological functions.</p>

<h4>2. Behavioral Symptoms</h4>
<p>Includes motor activity, speech patterns, and general behavior.</p>

<h4>3. Thought Content</h4>
<p>Includes coherence, hallucinations, delusions, and thought organization.</p>

---

<h3>PATIENT ASSESSMENT AREAS</h3>

<h4>1. Social Behavior</h4>
<p>
Observes interaction patterns such as friendliness, silence, talkativeness, withdrawal, or hostility in clinical settings.
</p>

<h4>2. Facial Expression & Emotional State</h4>
<p>
Patients may present with emotions such as restlessness, aggression, depression, joy, fear, apathy, or emotional dullness.
These observations are essential in mental health evaluation.
</p>

<h4>3. Intra-Clinical Activities</h4>
<p>
Includes participation in ward activities, group therapy, responsibilities, reading, crafts, and social engagement.
</p>

<h4>4. Feelings, Thoughts & Visitor Reactions</h4>
<p>
Observes emotional changes after visits, including warmth, distress, withdrawal, or agitation.
</p>

<h4>5. Leave (Vacation) Status</h4>
<p>
Assesses patient behavior before and after leave, including emotional state and thoughts about the experience.
</p>

<h4>6. Response to Treatment</h4>
<p>
Evaluates compliance, resistance, or acceptance of medications and therapy.
</p>

---

<h3>INTERVIEWING PATIENTS</h3>

<ul>
<li>Proper greeting and introduction</li>
<li>Explain purpose of interview</li>
<li>Ensure privacy and comfort</li>
<li>Use therapeutic communication techniques:
  <ul>
    <li>Active listening</li>
    <li>Reflection</li>
    <li>Clarification</li>
    <li>Feedback</li>
    <li>Appropriate silence</li>
  </ul>
</li>
</ul>

---

<h3>CONDUCTING THE CONVERSATION</h3>

<ul>
<li>Focus on patient complaints</li>
<li>Encourage open-ended responses</li>
<li>Summarize key points regularly</li>
<li>Explain treatment options clearly</li>
</ul>

---

<h3>CONCLUSION</h3>

<p>
A patient’s personality is shaped by family, environment, and life experiences.
The systematic nursing care process and mental health assessment are essential for effective psychiatric care and patient recovery.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "therapeutic-environment-communication",
      title: "Therapeutic Environment & Communication",
      content: `<h3>THERAPEUTIC ENVIRONMENT & THERAPEUTIC COMMUNICATION</h3>

<p>
A therapeutic environment is a structured and dynamic setting designed to promote healing,
improve mental health, enhance self-esteem, and support the patient’s reintegration into society.
</p>

---

<h3>PURPOSE OF THE THERAPEUTIC ENVIRONMENT</h3>

<ul>
<li>To manage and control the care environment</li>
<li>To improve self-esteem, self-worth, and self-confidence</li>
<li>To promote social reintegration and independence</li>
<li>To enhance interpersonal relationships</li>
</ul>

---

<h3>GOALS AND PRINCIPLES</h3>

<ul>
<li>Meet patients’ basic physical and psychological needs</li>
<li>Encourage self-expression</li>
<li>Improve communication between patient and staff</li>
<li>Promote positive patient-to-patient relationships</li>
<li>Enhance coping and adaptive skills</li>
<li>Reduce maladaptive behaviors</li>
<li>Encourage social skills development</li>
<li>Promote active participation in unit activities</li>
</ul>

---

<h3>ELEMENTS OF A THERAPEUTIC ENVIRONMENT</h3>

<h4>1. Safety</h4>
<p>Protection from physical and psychological harm.</p>

<h4>2. Structured Environment</h4>
<p>Clear routines and rules that reduce confusion and anxiety.</p>

<h4>3. Norms</h4>
<p>Guidelines that promote socially acceptable behavior.</p>

<h4>4. Boundaries</h4>
<p>Define acceptable and unacceptable behaviors within the unit.</p>

<h4>5. Balance</h4>
<p>Gradual shift from dependence to independence in patient behavior.</p>

<h4>6. Flexibility</h4>
<p>Regular review and adjustment of rules to improve care quality.</p>

---

<h3>THERAPEUTIC RELATIONSHIP</h3>

<p>
A therapeutic relationship is a professional, goal-oriented relationship between nurse and patient
that promotes healing and emotional growth.
</p>

<h4>Core Components</h4>

<ul>
<li><b>Trust:</b> Built through consistency, honesty, and reliability</li>
<li><b>Empathy:</b> Understanding the patient’s feelings without judgment</li>
</ul>

---

<h3>BARRIERS TO THERAPEUTIC COMMUNICATION</h3>

<ul>
<li>Agreeing or disagreeing excessively</li>
<li>Being defensive</li>
<li>Changing topics abruptly</li>
<li>Passing judgment</li>
<li>Giving false reassurance</li>
</ul>

---

<h3>SELF-AWARENESS & THERAPEUTIC USE OF SELF</h3>

<p>
Self-awareness is the understanding of one’s own beliefs, values, and emotional responses
and how they influence interactions with patients.
</p>

<p>
Therapeutic use of self refers to the intentional use of personal qualities, communication skills,
and emotional awareness to build effective nurse–patient relationships.
</p>

---

<h3>PHASES OF THE NURSE–PATIENT RELATIONSHIP</h3>

<ol>
<li><b>Pre-interaction Phase:</b> Preparation before meeting the patient</li>
<li><b>Orientation Phase:</b> Introduction, trust building, and identification of problems</li>
<li><b>Working Phase:</b> Exploration of issues and implementation of interventions</li>
<li><b>Termination Phase:</b> Ending relationship and evaluating progress</li>
</ol>

---

<h3>GOALS OF THERAPEUTIC COMMUNICATION</h3>

<ul>
<li>Establish a trusting nurse–patient relationship</li>
<li>Identify patient concerns and needs</li>
<li>Encourage emotional expression</li>
<li>Support development of coping and self-care skills</li>
</ul>

---

<h3>PRIVACY AND COMMUNICATION SETTINGS</h3>

<p>
Privacy enhances therapeutic communication but must be balanced with clinical safety and setting limitations.
</p>

<h4>Suitable Interaction Venues</h4>

<ul>
<li>Interview or conference rooms</li>
<li>Quiet corners of wards or day rooms</li>
<li>End of hallways (when appropriate)</li>
</ul>

<p>
The patient’s room may be used only when it is safe, appropriate, and comfortable for the client.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "communication-principles-techniques",
      title: "Therapeutic Communication Principles and Techniques",
      content: `<h3>THERAPEUTIC COMMUNICATION PRINCIPLES AND TECHNIQUES IN MENTAL HEALTH AND PSYCHIATRIC NURSING</h3>

<p>
Therapeutic communication refers to verbal and nonverbal communication techniques that help patients freely express their feelings, thoughts, and intentions.
It creates an environment of trust, empathy, respect, and understanding between the nurse and the patient.
</p>

<p>
Through therapeutic communication, patients feel valued, respected, and safe from judgment, punishment, or ridicule, which enhances openness and emotional expression.
</p>

---

<h3>ACTIVE LISTENING</h3>

<p>
Active listening is a deliberate and focused process of understanding both verbal and nonverbal messages from the patient.
It involves not just hearing words but interpreting meaning, emotions, and body language.
</p>

<p>
It is an interactive process where the nurse provides feedback, asks clarifying questions, and demonstrates understanding of the patient’s feelings.
</p>

<h4>Examples of Active Listening</h4>

<ul>
<li>“Where did it happen? How did it feel?”</li>
<li>“So you mean…”</li>
<li>Noticing nonverbal cues like crying or avoiding eye contact</li>
</ul>

<p>
Passive listening occurs when there is little or no response or engagement from the listener.
</p>

---

<h3>POINTS TO CONSIDER IN ACTIVE LISTENING</h3>

<ul>
<li>Relax the patient and create a comfortable atmosphere</li>
<li>Use appropriate body language (eye contact, posture)</li>
<li>Remove distractions</li>
<li>Ensure a quiet and suitable environment</li>
<li>Encourage the patient to speak freely</li>
<li>Be patient and avoid interrupting</li>
<li>Allow time for the patient to express thoughts fully</li>
</ul>

---

<h3>BARRIERS TO ACTIVE LISTENING</h3>

<ul>
<li>Prejudice and personal bias</li>
<li>Language differences</li>
<li>Environmental distractions</li>
<li>Fatigue or tiredness</li>
<li>Anxiety, fear, or emotional distress</li>
<li>Pain or physical discomfort</li>
</ul>

---

<h3>ASKING QUESTIONS</h3>

<p>
Effective questioning is essential for accurate assessment and diagnosis.
However, excessive questioning may overwhelm the patient and reduce communication effectiveness.
</p>

---

<h3>OPEN-ENDED VS CLOSED-ENDED QUESTIONS</h3>

<h4>Open-ended Questions</h4>
<p>Allow patients to express feelings, thoughts, and experiences freely.</p>
<p>Example: "Can you tell me about your experience?"</p>

<h4>Closed-ended Questions</h4>
<p>Used to obtain specific information.</p>
<p>Example: "Do you smoke?"</p>

---

<h3>ENCOURAGING COMMUNICATION</h3>

<p>
Encouraging communication helps patients express themselves, especially during the initial stage of the nurse–patient relationship.
Verbal and nonverbal cues are used to promote discussion.
</p>

---

<h3>REFLECTION AND EMPATHY</h3>

<p>
Reflection helps clarify the patient’s message and ensures understanding between nurse and patient.
Empathy allows the nurse to understand and communicate the patient’s emotional experience.
</p>

---

<h3>PROVIDING INFORMATION</h3>

<p>
Patients, especially newly admitted ones, need information about the hospital environment, procedures, and expectations.
Providing information helps them adapt and reduces anxiety.
</p>

---

<h3>FEEDBACK AND SUMMARIZATION</h3>

<p>
Feedback focuses on observed behavior rather than personality traits.
It helps patients understand how their behavior is perceived.
</p>

<h4>Key Aspects of Feedback</h4>

<ul>
<li>Give feedback at appropriate time and setting</li>
<li>Start with positive observations before negative ones</li>
<li>Use “I” statements</li>
<li>Focus on behavior, not personality</li>
</ul>

<p>
Summarization helps organize and review key points discussed during communication.
It helps the patient understand and retain important information.
</p>

---

<h3>CONFRONTATION AND REFOCUSING</h3>

<p>
Confrontation helps patients recognize inconsistencies between their words and actions.
Refocusing redirects attention to important issues during communication.
</p>

---

<h3>SILENCE AS A TOOL</h3>

<p>
Silence is a therapeutic technique that allows patients to think, reflect, and express emotions.
It is especially useful during emotional or sensitive discussions.
</p>

---

<h3>THERAPEUTIC SELF-DISCLOSURE</h3>

<p>
Therapeutic self-disclosure involves the nurse sharing appropriate emotional responses to help the patient gain insight into their feelings and behavior.
</p>

---

<h3>SUMMARIZING</h3>

<p>
Summarizing is used at the beginning, during, or end of communication to review important points and ensure clarity.
It helps organize thoughts and improve understanding.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "personality-development",
      title: "Personality Development & Eight Stages of Human Development",
      content: `<h3>PERSONALITY DEVELOPMENT & EIGHT STAGES OF HUMAN DEVELOPMENT</h3>

<p>
Personality development is shaped through a combination of maturation and learning processes, which occur within individualization and socialization experiences.
These processes are influenced by biological growth, environmental factors, and life experiences across the lifespan.
</p>

---

<h3>MATURATION AND INDIVIDUALIZATION–SOCIALIZATION</h3>

<h4>Maturation</h4>
<p>
Maturation refers to the natural development of innate abilities without learning or training.
For example, most infants begin walking at around 12–14 months without formal instruction.
</p>

<h4>Individualization–Socialization</h4>
<p>
Individualization–socialization is the process through which individuals develop behaviors, personality traits, and social skills through learning and experience.
For example, children gradually develop language skills and expand vocabulary through interaction.
</p>

---

<h3>DEVELOPMENTAL ASPECTS OF PERSONALITY</h3>

<p>
Personality development should be understood as a biopsychosocial process involving:
sensory-motor development, cognitive growth, emotional development, adaptation, and defense mechanisms.
</p>

---

<h3>ERIKSON’S EIGHT STAGES OF PSYCHOSOCIAL DEVELOPMENT</h3>

<p>
Erik Erikson described eight stages of human development, each characterized by a psychosocial crisis that must be resolved for healthy personality development.
</p>

<ol>
<li><b>Trust vs. Mistrust (0–18 months):</b> Development of basic trust in caregivers and the world.</li>

<li><b>Autonomy vs. Shame and Doubt (18 months–3 years):</b> Development of independence and self-control.</li>

<li><b>Initiative vs. Guilt (3–5 years):</b> Child explores environment and develops initiative; excessive criticism leads to guilt.</li>

<li><b>Industry vs. Inferiority (6–11 years):</b> Development of competence and achievement; failure may lead to inferiority feelings.</li>

<li><b>Identity vs. Role Confusion (12–18 years):</b> Adolescents develop personal identity and sense of self.</li>

<li><b>Intimacy vs. Isolation (18–40 years):</b> Formation of close relationships; failure may lead to isolation.</li>

<li><b>Generativity vs. Stagnation (40–65 years):</b> Contribution to society, family, and next generation.</li>

<li><b>Integrity vs. Despair (65 years–death):</b> Reflection on life leading to either satisfaction or regret.</li>
</ol>

---

<h3>SUMMARY OF DEVELOPMENTAL STAGES</h3>

<h4>Trust vs. Mistrust</h4>
<p>Infants learn whether the world is safe and reliable based on caregiver consistency.</p>

<h4>Autonomy vs. Shame and Doubt</h4>
<p>Children develop independence or experience doubt depending on caregiver support.</p>

<h4>Initiative vs. Guilt</h4>
<p>Children begin to assert control over environment; excessive restriction may lead to guilt.</p>

<h4>Industry vs. Inferiority</h4>
<p>School-age children develop competence through learning and achievement.</p>

<h4>Identity vs. Role Confusion</h4>
<p>Adolescents search for personal identity and direction in life.</p>

<h4>Intimacy vs. Isolation</h4>
<p>Young adults form meaningful relationships or struggle with loneliness.</p>

<h4>Generativity vs. Stagnation</h4>
<p>Adults contribute to society and support the next generation.</p>

<h4>Integrity vs. Despair</h4>
<p>Older adults reflect on life with either satisfaction or regret.</p>

---

<h3>CONCLUSION</h3>

<p>
Personality development is influenced by biological growth, family environment, education, and social experiences.
Healthy development requires successful resolution of psychosocial crises at each stage, leading to a stable and well-adjusted personality.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "Individuals With Sexual Disorders And Nursing Approach",
      title: "Individuals With Sexual Disorders And Nursing Approach",
      content: `<h3>INDIVIDUALS WITH SEXUAL DISORDERS AND NURSING APPROACH</h3>

<h3>SEXUALITY AND SEXUAL HEALTH</h3>
<p>
Sexuality refers to the way individuals experience and express themselves as sexual beings.
It is not only biological but also emotional, intellectual, and social, contributing to personality development,
communication, and relationships. According to WHO, sexual health is a state of physical, emotional, mental,
and social well-being in relation to sexuality.
</p>

<p>
Sexuality is an integral part of personality, and its expression varies from person to person.
</p>

---

<h3>TERMS RELATED TO SEXUAL HEALTH</h3>

<h4>Gender (Sex)</h4>
<p>Biological characteristics such as chromosomes, hormones, reproductive organs, and reproductive functions.</p>

<h4>Gender Identity</h4>
<p>An individual’s internal sense of being male, female, or another gender and how they perceive themselves.</p>

---

<h3>DIFFICULTIES WITH SEXUAL ORIENTATION</h3>
<p>
Some individuals may experience conflict between their sexual behavior and desires due to cultural,
religious, or personal reasons. This may lead to distress and need for counseling.
</p>

<p>
Homosexuality is not considered a mental disorder.
</p>

---

<h3>HOMOSEXUALITY AND MENTAL HEALTH</h3>
<p>
LGBTQ+ individuals may have higher risks of mental health challenges, often linked to stigma,
discrimination, and lack of acceptance.
</p>

---

<h3>HOMOPHOBIA</h3>
<p>
Homophobia is an irrational fear or negative attitude toward homosexual individuals, which can
negatively affect healthcare quality.
</p>

---

<h3>SEXUAL DISORDERS (PARAPHILIAS)</h3>
<p>
Paraphilias involve intense sexual urges or behaviors toward unusual objects, situations, or individuals,
often leading to distress or impairment.
</p>

---

<h4>EXHIBITIONISTIC DISORDER</h4>
<p>Exposure of genitals to unsuspecting strangers for sexual arousal.</p>

<h4>FETISHISTIC DISORDER</h4>
<p>Sexual arousal from non-living objects or body parts (excluding genitals).</p>

<h4>FROTTEURISTIC DISORDER</h4>
<p>Sexual arousal from non-consensual touching or rubbing against others.</p>

<h4>PEDOPHILIC DISORDER</h4>
<p>Sexual attraction to prepubescent children, causing distress or harmful behavior.</p>

<h4>SEXUAL MASOCHISTIC DISORDER</h4>
<p>Arousal from being humiliated, hurt, or suffering pain.</p>

<h4>SEXUAL SADISTIC DISORDER</h4>
<p>Arousal from inflicting physical or psychological suffering on others.</p>

<h4>TRANSVESTIC DISORDER</h4>
<p>Sexual arousal from cross-dressing.</p>

<h4>VOYEURISTIC DISORDER</h4>
<p>Sexual arousal from watching unsuspecting individuals in private activities.</p>

---

<h3>ROLE OF THE NURSE IN PARAPHILIC DISORDERS</h3>
<ul>
<li>Early identification and prevention</li>
<li>Patient education and counseling</li>
<li>Referral to specialists</li>
<li>Support for behavioral modification</li>
</ul>

---

<h3>SEXUAL DYSFUNCTION</h3>
<p>
Sexual dysfunction refers to difficulties in sexual response or satisfaction.
It may affect desire, arousal, orgasm, or cause pain during intercourse.
</p>

---

<h3>TYPES OF SEXUAL DYSFUNCTION</h3>
<ul>
<li>Desire disorders: lack of sexual interest</li>
<li>Arousal disorders: difficulty becoming sexually excited</li>
<li>Orgasm disorders: delayed or absent orgasm</li>
<li>Pain disorders: discomfort during intercourse</li>
</ul>

---

<h3>COMMON SEXUAL DISORDERS</h3>
<ul>
<li>Erectile dysfunction</li>
<li>Premature ejaculation</li>
<li>Female sexual arousal disorder</li>
<li>Orgasmic disorder</li>
<li>Genito-pelvic pain disorder</li>
</ul>

---

<h3>GENDER DYSPHORIA</h3>
<p>
Gender dysphoria occurs when a person’s experienced gender does not match their assigned sex at birth,
leading to distress and discomfort.
</p>

---

<h3>NURSING ROLE IN SEXUAL HEALTH</h3>
<ul>
<li>Health education and awareness</li>
<li>Early detection of disorders</li>
<li>Psychological support</li>
<li>Referral for specialized care</li>
</ul>

---

<h3>CONCLUSION</h3>
<p>
Sexual health is an important part of overall well-being. Nurses play a key role in promoting healthy
sexual development, preventing disorders, and supporting individuals with sexual health challenges
through education, care, and empathy.
</p>`,
      media: [{ type: "video", src: "" }]
    },

    {
      id: "observation-report-writing",
      title: "Writing Observation Report",
      content: "",
      media: [{ type: "video", src: "" }]
    },

    {
      id: "assessment-risk-management",
      title: "Assessment and Risk Management in Psychiatry Clinics",
      content: "",
      media: [{ type: "video", src: "" }]
    },

    {
      id: "personality-disorders",
      title: "Individuals with Personality Disorders and Nursing Approach",
      content: "",
      media: [{ type: "video", src: "" }]
    },

    {
      id: "psychiatric-rehabilitation",
      title: "Psychiatric Rehabilitation and Nursing",
      content: "",
      media: [{ type: "video", src: "" }]
    },

    {
      id: "substance-use-disorders",
      title: "Substance Use Disorders and Nursing Approach",
      content: "",
      media: [{ type: "video", src: "" }]
    },

    {
      id: "psychiatric-emergencies",
      title: "Emergencies in Psychiatry and Drugs Used",
      content: "",
      media: [{ type: "video", src: "" }]
    },

    {
      id: "sleep-disorders-psychiatry",
      title: "Sleep Process and Sleep Disorders in Psychiatry",
      content: "",
      media: [{ type: "video", src: "" }]
    }
  ]
},
research: {
title: "Research",
image: "/images/research.jpg",
sections:[
  {
    id: "introduction-to-nursing-research",
    title: "Introduction to Nursing Research",
    content: "Nursing research is a systematic inquiry used to develop evidence that improves nursing practice, patient outcomes, and healthcare systems. It forms the foundation of evidence-based nursing practice.",
    media: []
  },
  {
    id: "importance-of-research",
    title: "Importance of Nursing Research",
    content: "Explores how research improves patient care, strengthens clinical decision-making, and advances the nursing profession.",
    media: []
  },
  {
    id: "types-of-research",
    title: "Types of Nursing Research",
    content: "Includes quantitative, qualitative, and mixed-method research approaches used in healthcare studies.",
    media: []
  },
  {
    id: "research-process",
    title: "Steps in the Research Process",
    content: "Covers problem identification, literature review, hypothesis formulation, data collection, analysis, and interpretation.",
    media: []
  },
  {
    id: "research-problem",
    title: "Research Problem and Questions",
    content: "Focuses on identifying clear, relevant, and researchable nursing problems and formulating research questions.",
    media: []
  },
  {
    id: "literature-review",
    title: "Literature Review",
    content: "A critical analysis of existing studies to identify gaps and support research direction.",
    media: []
  },
  {
    id: "sampling-techniques",
    title: "Sampling Techniques",
    content: "Covers probability and non-probability sampling methods used in selecting study participants.",
    media: []
  },
  {
    id: "data-collection-methods",
    title: "Data Collection Methods",
    content: "Includes questionnaires, interviews, observation, and medical record reviews.",
    media: []
  },
  {
    id: "data-analysis",
    title: "Data Analysis in Nursing Research",
    content: "Explains how data is organized, interpreted, and presented using statistical or thematic methods.",
    media: []
  },
  {
    id: "research-ethics",
    title: "Research Ethics in Nursing",
    content: "Focuses on informed consent, confidentiality, beneficence, and protection of participants.",
    media: []
  },
  {
    id: "evidence-based-practice",
    title: "Evidence-Based Nursing Practice",
    content: "Integration of research evidence, clinical expertise, and patient preferences into nursing care.",
    media: []
  },
  {
    id: "research-proposal",
    title: "Writing a Research Proposal",
    content: "Structure and components of a nursing research proposal including objectives, methodology, and justification.",
    media: []
  }
]
},

};

export default courseData;