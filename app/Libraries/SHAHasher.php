<?php namespace App\Libraries;
use Illuminate\Contracts\Hashing\Hasher as HasherContract;

class SHAHasher implements 	HasherContract{
        public function info($hashedValue){
            return password_get_info($hashedValue);
        }
        /**
        * Hash the given value.
        *
        * @param  string  $value
        * @param  array   $options
        * @return string
        */
        public function make($value, array $options = array()){
            return hash('sha1', $value);
        }
    
        /**
        * Check the given plain value against a hash.
        *
        * @param  string  $value
        * @param  string  $hashedValue
        * @param  array   $options
        * @return bool
        */
        public function check($value, $hashedValue, array $options = array()){
            return $this->make($value) === $hashedValue;
        }
    
        /**
        * Check if the given hash has been hashed using the given options.
        *
        * @param  string  $hashedValue
        * @param  array   $options
        * @return bool
        */
        public function needsRehash($hashedValue, array $options = array()){
            return false;
        }
    
}