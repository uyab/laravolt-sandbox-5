<?php
 ini_set('display_errors', 1); 
 ini_set('display_startup_errors', 1); 
 error_reporting(E_ALL);

//var_dump(fsockopen('ldap.forumsys.com', 389));

echo "<h3>LDAP forumsys query test</h3>";

$server = "ldap.forumsys.com:389"; 
$ds = ldap_connect("ldap://$server"); 
ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);

$dn = "cn=read-only-admin,dc=example,dc=com";
$pass = "password";
$ldapbind = ldap_bind($ds, $dn, $pass); //this is the point we are authenticating

$dn = "dc=example,dc=com"; 
$filter = "uid=*"; //don't filter anyone out (every user has a uid)
$sr = ldap_search($ds, $dn, $filter) or die ("bummer"); //define your search scope

$results = ldap_get_entries($ds, $sr); //here we are pulling the actual entries from the search we just defined
for ($i=0; $i<$results["count"]; $i++)
    {
    // to show the attribute displayName (note the case!)
    echo $results[$i]["cn"][0]."<br>";
   
    } 
	
//var_dump(fsockopen('ldap.javan.co.id', 389));
echo "<h3>LDAP JAVAN query test</h3>";

$server = "ldap.javan.co.id:389"; 
$ds = ldap_connect("ldap://$server"); 
ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);

$bind_dn = "cn=admin,dc=javan,dc=co,dc=id";
$pass = "j4v4nLabs";
$ldapbind = ldap_bind($ds, $bind_dn, $pass); //this is the point we are authenticating

$base_dn = "dc=javan,dc=co,dc=id"; 
$filter = "uid=*"; //don't filter anyone out (every user has a uid)
$sr = ldap_search($ds, $base_dn, $filter) or die ("bummer"); //define your search scope

$results = ldap_get_entries($ds, $sr); //here we are pulling the actual entries from the search we just defined
for ($i=0; $i<$results["count"]; $i++)
    {
    // to show the attribute displayName (note the case!)
    echo $results[$i]["cn"][0]."<br>";
   
    } 
    
	
//var_dump(fsockopen('freeipa.javan.co.id', 389));
echo "<h3>FreeIpa JAVAN query test</h3>";

$server = "freeipa.javan.co.id:389"; 
$ds = ldap_connect("ldap://$server"); 
ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);

$bind_dn = "cn=javanldap,cn=sysaccounts,cn=etc,dc=javan,dc=co,dc=id";
$pass = "Dona14.fops";
$ldapbind = ldap_bind($ds, $bind_dn, $pass); //this is the point we are authenticating

$base_dn = "cn=accounts,dc=javan,dc=co,dc=id"; 
$filter = "uid=*"; //don't filter anyone out (every user has a uid)
$sr = ldap_search($ds, $base_dn, $filter) or die ("bummer"); //define your search scope

$results = ldap_get_entries($ds, $sr); //here we are pulling the actual entries from the search we just defined
for ($i=0; $i<$results["count"]; $i++)
    {
    // to show the attribute displayName (note the case!)
    echo $results[$i]["cn"][0]."<br>";
   
    } 
?>