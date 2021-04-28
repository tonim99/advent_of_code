require './day2'
require 'test/unit'

class TestDay2 < Test::Unit::TestCase
    def test_simple_requirements
        input = { :min => 1, :max => 1, :required_char => "a", :password => "a" }
        assert_equal(true, is_valid(input))
    end
    
    def test_simple_requirements_not_met
        input = { :min => 1, :max => 1, :required_char => "a", :password => "b" }
        assert_equal(false, is_valid(input))
    end

    def test_valid_two_char_password
        input = { :min => 1, :max => 5, :required_char => "a", :password => "aa" }
        assert_equal(true, is_valid(input))
    end

    def test_two_char_password_min_not_met
        input = { :min => 2, :max => 5, :required_char => "a", :password => "ab" }
        assert_equal(false, is_valid(input))
    end

    def test_max_exceeded
        input = { :min => 1, :max => 1, :required_char => "a", :password => "aa" }
        assert_equal(false, is_valid(input))
    end

    def example_one
        input = { :min => 1, :max => 3, :required_char => "a", :password => "abcde" }
        assert_equal(true, is_valid(input))
    end

    def example_two
        input = { :min => 1, :max => 3, :required_char => "b", :password => "cdefg" }
        assert_equal(false, is_valid(input))
    end

    def example_three
        input = { :min => 2, :max => 9, :required_char => "c", :password => "ccccccccc" }
        assert_equal(true, is_valid(input))
    end

end 
