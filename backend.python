import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import math
df=pd.read_csv('international_matches.csv')
df.T

# Fifa rankings
home=df[['date','home_team','home_team_fifa_rank','home_team_total_fifa_points','home_team_score']]
away=df[['date','away_team','away_team_fifa_rank','away_team_total_fifa_points','away_team_score']]
home=home.rename(columns={'home_team':'team','home_team_fifa_rank':'rank','home_team_total_fifa_points':'total fifa points','home_team_score':'team_score'})
away=away.rename(columns={'away_team':'team','away_team_fifa_rank':'rank','away_team_total_fifa_points':'total fifa points','away_team_score':'team_score'})
fifarank=home.append(away)
fifarank=fifarank.sort_values(['team','date'],ascending=[True,False])
fifarank['row_number']=fifarank.groupby('team').cumcount()+1
fifatop=fifarank[fifarank['row_number']==1].drop('row_number',axis=1).nsmallest(10,'rank')
fifatop[['team','rank','total fifa points']]

# Home advantage
hometeam=df[['country','home_team_score','away_team_score']]
homewin=hometeam.loc[hometeam['home_team_score']>hometeam['away_team_score']]
homewin=homewin.rename(columns={'home_team_score':'goals_scored','away_team_score':'goals_conceded'})
homewin
homeloss=hometeam.loc[hometeam['home_team_score']<hometeam['away_team_score']]
homeloss=homeloss.rename(columns={'home_team_score':'goals_scored','away_team_score':'goals_conceded'})
homeloss
home_advantage=homewin.append(homeloss)
home_advantage
x=home_advantage.mean()
x                                                       ##pie plot

# country which won maximum matches
homewin['country'].value_counts().nlargest(10)
# country which lost maximum matches
homeloss['country'].value_counts().nlargest(10)

# all countries that played world cup between 1994-2022 
df=pd.read_csv('FIFA - 1994.csv')
df1=pd.read_csv('FIFA - 1998.csv')
df2=pd.read_csv('FIFA - 2002.csv')
df3=pd.read_csv('FIFA - 2006.csv')
df4=pd.read_csv('FIFA - 2010.csv')
df5=pd.read_csv('FIFA - 2014.csv')
df6=pd.read_csv('FIFA - 2018.csv')
df7=pd.read_csv('FIFA - 2022.csv')
countries=df['Team'].append((df1['Team'].append((df2['Team'].append(df3['Team'])))))
countries2=countries.append((df4['Team'].append((df5['Team'].append(df6['Team'])))))
countries3=countries2.append(df7['Team'])
all_countries=countries2.drop_duplicates()
wc_countries=all_countries.tolist()
print(wc_countries)
length=len(wc_countries)
print("\n"+str(length))

# No. of matches between selected two teams
a=input(print('enter 1st country'))
b=input(print('enter 2nd country'))
homematch= df[(df['home_team'] == a)&(df['away_team']== b)]    
awaymatch= df[(df['home_team'] == b)&(df['away_team']== a)]
matches1 = pd.concat([homematch, awaymatch], ignore_index=True)
matches1







# Winning percentage between two teams\first_con=input(print("enter country name"))
first_con=input(print("enter country name"))
if first_con in wc_countries:
    df=pd.read_csv('FIFA - 1994.csv')
    wintotal=df[df['Team']== first_con]
    winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
    print(winpercentage)
else:
    print("Invalid input")
  
second_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 1998.csv')
  wintotal=df[df['Team']== second_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")

third_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 2002.csv')
  wintotal=df[df['Team']== third_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")

fourth_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 2006.csv')
  wintotal=df[df['Team']== fourth_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")

fifth_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 2010.csv')
  wintotal=df[df['Team']== fifth_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")

sixth_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 2014.csv')
  wintotal=df[df['Team']== sixth_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")

seventh_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 2018.csv')
  wintotal=df[df['Team']== seventh_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")

eighth_con=input(print("enter country name"))
if first_con in wc_countries:
  df=pd.read_csv('FIFA - 2022.csv')
  wintotal=df[df['Team']== eighth_con]
  winpercentage=(wintotal['Win']/wintotal['Games Played'])*100
  print(winpercentage)
else:
  print("invalid input")



## Custom teambuilder
release=df['Release Clause']
lister=release.tolist()
count=0
for i in range(len(lister)):
    
    #if math.isnan(lister[i])
    if isinstance(lister[i],str):
        count+=1
        if lister[i][-1]=='M':
            M=100000
            lister[i] = round(float(lister[i][1:len(lister[i])-1])*M)
        elif lister[i][-1]=='K':
            K=1000
            lister[i] = round(float(lister[i][1:len(lister[i])-1])*K)
        continue
    lister[i] = 0

indexes = 16709
non_nan=(indexes-count)
print("no. of non nan =",count)  
print("no. of nan =",non_nan)
mean = sum(lister)/(len(lister)-(indexes-count))
mean=round(mean,2)
print(mean)
for i in range(len(lister)):
    if lister[i] == 0:
        lister[i] = round(mean,0)
        continue
lister

players1=df[['ID','Name','Age','Nationality','Overall','Club','Best Position','Release Clause']]
for i in range(len(players1)):
    release_clause = players1.loc[i, 'Release Clause']
    if isinstance(release_clause, str) and ((release_clause[0]=='€'and release_clause[-1]=='M')or(release_clause[0]=='€'and release_clause[-1]=='K')):
        if release_clause[-1]=='M':
            M=1000000
            players1.loc[i, 'Release Clause'] = round(float(release_clause[1:len(release_clause)-1])*M)
        elif release_clause[-1]=='K':
            K=1000
            players1.loc[i, 'Release Clause'] = round(float(release_clause[1:len(release_clause)-1])*K)
    else:
        players1.loc[i, 'Release Clause'] = '775757'










































