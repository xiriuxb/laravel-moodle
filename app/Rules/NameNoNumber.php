<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class NameNoNumber implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
        preg_match('(/^[ñA-Za-z]+$/', 'foobarbaz', $matches, PREG_OFFSET_CAPTURE);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'No puede contener números';
    }
}
