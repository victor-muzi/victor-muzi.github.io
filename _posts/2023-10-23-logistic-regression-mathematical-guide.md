---
title: "Deviating From Linear Regression: A Mathematical Guide to Logistic Regression"
date: 2023-05-28 10:00:00 +1000
categories: [statistics, data-science, machine-learning, mathematics]
description: "A comprehensive mathematical exploration of logistic regression, covering everything from why we use Euler's number to odds ratios, probability calculations, and model interpretation. Perfect for students and practitioners wanting to understand the theory behind this essential statistical method."
image: /assets/img/profilepic.jpg
---

1. # **Deviating From Linear Regression**

Linear regression uses predictors to output quantitative values for some dependent variable Y. 

In contrast, logistic regression estimates the probability that a *dichotomous* (1 or 0\) variable (**Y**) is equal to **1** given a model of predictors (**x**). Mathematically:  
 Pr(Y=1|x)   
Thus, our predictors within some function:  
***f(model) \= Probability***  
Must output something within the set:  
**\[0,1\]**  
Corresponding to a probability P(Y=1|x).

2. # **Mathematical Background**

## **0\. Why Euler’s number?**

**Short answer:** for mathematical simplicity and convenience. (That's also why, historically, [natural logarithms were the first ones invented and tabulated](https://plus.maths.org/content/dynamic-logarithms).)  
**Explanation:**  
For logistic regression, we use the base ‘e’:  
loge(Odds)= 0+1x1  ...+ pxpi (Explained in the next section: 1\. Odds)  
*(Note that the logistic regression algorithm calculates the above parameters to fit the function O=exp(η) using the Maximum Likelihood (ML) method for finding the smallest possible deviance between the observed and predicted values using calculus derivative calculations. After several iterations, it gets to the smallest possible deviance or best fit.)*

It is possible to use other bases which are commonly seen in math, such as 2 or 10 rather than e. However, the exponential function (AKA exp(x), ex ) is special because, for the function:  
 f(x)=ex   
Has the property:  
  ddxex=ex.    
Euler’s number is the only number that satisfies the equation f'(x)=f(x).  
I.e. ‘e’ is its own derivative, which makes a lot of computations easier. For example, instead of  f(x)=ex, let’s use f(x)=2x.   
Then, f'(x)=loge(2)f(x) —we have to evoke ‘e’ anyway, and clearly f'(x) \= loge(2)f(x) is unnecessarily messier than simply  f'(x)=f(x) \=ex, especially in later calculations involving derivatives; in calculating the derivative of the P(Y) (the sigmoid, seen in [2\. Probability](#2.-probability)), the fact that ex is its own derivative leads to a nice formula for the derivative of the sigmoid.

## **1\. Odds**

*(A conceptual understanding is in [3.2 Conceptualising Odds & Percentage Increase](#3.2-conceptualising-odds-&-percentage-increase))* 

Where the model, η, is \= 0+1x1  ...+ pxpi  
Odds:  \= e    
*& loga(ax)=x*   
**∴** loge()= \*  

This equation is the ***logit*** of the probability of Y: Logit(P) \= lnP1-P  
See the graph below; logit(P) vs P  
![][image1]

## **2\. Probability** {#2.-probability}

*The chance of an event occurring, from 0-1.*  
Since  \=Pr(Y=1|x)1 \- Pr(Y=1|x)  (i.e., ratio of Occurring to Not Occurring)  
Let Pr(Y=1|x) \= p;  
 1-p-p=0  
\-p-p=0  
\-p(+1)=0   
p=\--(+1)=+1  
**∴** P(Y=1**|**x) \= \+1 \= ee \+1

A plot of P(Y) vs η:  
![][image2]  
This is also referred to as ***expit***(η).

Compare it with Logit(P):  
![][image3]  
Evidently, they are *inverses* of each other. 

## 

## 

## **3\. Ratio of two odds**

OR \= 21= e2 / e1  
 &  xaxb  \= xa-b  
∴ OR= e2-1  
 (2-1) \= (0-0 ) \+ (1\[x+ k\] \- 1x)  \= 1(x+k\-x)  
**∴** OR \=e1(x)  

OR \= e1(x)

*NOTE:*  
 *e1 e2    eee*   
Meaning that a 1 unit increase in 1(x) corresponds to an OR increase by e, which ≈ 2.7.

### **3.1 Interpretation of Odds**

This proportionate change in odds—the odds ratio—is interpreted in terms of the change in odds: If OR\>1, then it indicates that as the predictor increases, the odds of the outcome occurring increase. Conversely, OR\<1 indicates that as the predictor increases, the odds of the outcome occurring decrease.

More on understanding odds below. 

### **3.2 Conceptualising Odds & Percentage Increase**  {#3.2-conceptualising-odds-&-percentage-increase}

Suppose that you toss an unbiased coin with a 50/50 chance of tails or heads. That means if you were to flip the coin 100 times, chances are you would get 50 tails and 50 heads.   
Thus, the ratio of tails-to-heads is **1:1**.

Suppose now you have a biased coin with a **⅔** chance of getting *tails.* Thus, P(Heads) \= **⅓**   
You are now exactly ***twice*** as likely to get tails than heads; 2/1 \= 2  
**( ⅔ ÷ ⅓** \= 2**)**  
Conversely, **the odds of heads** is 1:2 (or 0.5:1)  
You can see how you can go back to probability from these odds:  
P(Heads) \= O / (O+1)  \= 0.5 / (1.5) \= **⅓**   
**2/3**

By what **percentage** are your odds of tails **greater** than heads?   
**Conceptual question:** Given there’s a *difference of odds*, upon finding their ratio, by what percentage is their difference? E.g., if you increase x by 1, by what percentage do the odds change?

H→T \= 0.5 →2 \= 4x ‘bigger’; (4-1 \= 300%)

Thus it increased *by* 2-0.5 \= 1.5.   
The percentage it *increased by* is 1.5/0.5 \= 3 \= 300%  
We can thus generalise this to the formula:  
2-11=21-11=21-1  
And since OR \= 21  
Then **percentage increase**  \=(OR-1)100

**Using Exponential Formulas**  
 \= e  & (Tails)=2,   thus  Tails=loge(2) 0.6931472  
Likewise,  (H) \=0.5,   thus  Heads= \-Tails  
∴ OR= eTails-Heads=e2Tails=4  
Percentage increase \= (4-1)100=300%

3. #  **Running The Model**

## **1\. Goodness of Fit**

Similar to R-squared for linear models:  
Log-likelihood \= i=1NYiln(P(Yi)) \+ (1-Yi)ln(1-P(Yi))   
Yi \= 1 or 0  
Thus (1-Yi) \= 0 for Y=1  
Yi \= 1 for Y \= 1

I.e. increases with *residuals:*

*![][image4]*

Then, deviance \= \-2 \* log-likelihood (-2LL)  
Which has a chi-square distribution.

Comparing models;  
Yes/Total. If \>=.5, yes  
If \<.5, no  
Likelihood ratio: subtract  
As log(a)-lob(b) \= log(a/b)

Df baseline \= parameters \= 1  
Model df \= p+1

Thus can be used to compare two models by adding predictors.

Hosmer and Lemeshow’s (1989) measure, , is calculated by dividing the model chi-square, which represents the change from the baseline (based on the loglikelihood) by the baseline −2LL (the deviance of the model before any predictors were entered):   
R\_L ^ \= Xmodel / \-2LL\_baseline

Can be represented also as:  
\[ \-2LL\_baseline \- (-2LLnew)  \]  /  \-2LL\_Baseline

Thus R\_L ^2 is the PROPORTIONAL reduction in the absolute value of the log-likelihood measure.

## **2\. Assumptions**

* Linearity

\- In the linear model we assume that the outcome has linear relationships with the predictors. In logistic regression the outcome is categorical and so this assumption is violated, so we use the log (or **logit**) of the data. The assumption of linearity in logistic regression, therefore, assumes that there is a linear relationship between any continuous predictors and the logit of the outcome variable.   
 \- This assumption can be tested by looking at whether the interaction term between the predictor and its log transformation is significant.

* Independence of errors

 \- Where the variance is larger than expected from the model. This can be caused by violating the assumption of independence. It makes the standard errors small.  
 \- SPSS produces a chi-square goodness-of-fit statistic, and overdispersion is present if the ratio of this statistic to its degrees of freedom is greater than 1 (this ratio is called the dispersion parameter, ). Overdispersion is likely to be problematic if the dispersion parameter approaches or is greater than 2\.  
The effects of overdispersion can be reduced by using the dispersion parameter to rescale the standard errors and confidence intervals. For example, the standard errors are multiplied by  to make them bigger.

## **3\. SPSS Output**

### **3.1 Comparing Models**

Bla

### **3.2 Block 0**

Bla

### **3.3 Model Summary**

Bla

### **3.4 Interpreting Residuals**

Bla

### **3.5. Calculating Effect Size**

Bla

# **All Equations**

**Model:** η \= 0+1x1  ...+ pxpi  
**Odds:**  \= e  \=  P1 \- P  
**Probability:** P(Y=1|x) \= \+1   
**Logit of P:** \=logeP1-P  
**Odd Ratio:** OR \= 21= e1(x)    
**Odd Percentage Increase:** \=(OR-1)100  
**Model Percentage Increase:** \=N(P0.5  Y=1) \+ N(P\<0.5  Y=0)NTotal-N(Y=1 or 0)NTotal

[image1]:
